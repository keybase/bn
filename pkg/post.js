
function bigint_or_number (x) {
	if (typeof(x) === 'number') { return nbv(x); }
	else { return x; }
};

function buffer_to_ui8a (b) {
	var l = b.length;
	var ret = new Uint8Array(l);
	for (var i = 0; i < l; i++) {
		ret[i] = b.readUInt8(i);
	}
	return ret;
};

// Match this function to the bigint/bignum native JS interface
// in node.  Typically we're doing it the other way around.
BigInteger.prototype.fromBuffer = function (buf) {
    // the last 'true' is for 'unsigned', our hack to jsbn.js to 
    // shut off DER-integer interpretation
	this.fromString(buffer_to_ui8a(buf), 256, true);
	return this;
};

BigInteger.fromBuffer = function (buf) {
	var ret = nbi();
	ret.fromBuffer(buf);
	return ret;
};

BigInteger.random_nbit = function (nbits, rf) {
	return new BigInteger(nbits, rf);
};

BigInteger.prototype.inspect = function () {
	return "<BigInteger/pure " + this.toString() + ">";
};

// For compatability with the 'bigi' package used by ecurve
BigInteger.fromHex = function (s) {

	if (!s.match(/^[a-fA-F0-9]*$/)) { throw new Error("hex string invalid: "+ s); }
	if (s.length % 2 != 0) { throw new Error("got an odd-length hex-string"); }
	return new BigInteger(s, 16);
};

BigInteger.valueOf = function (x) {
	return bigint_or_number(x);
};

BigInteger.prototype.toBuffer = function (size) {
	var x;
	if (!size) { size = 0; }
	var s = this.signum();
	if (s == 0) { x = []; }
	else {x = this.toByteArray(s < 0); }
	var ret = new Buffer(x);
	if ((diff = size - x.length) > 0) {
		var pad = new Buffer(diff);
		pad.fill(0);
		ret = Buffer.concat([pad,ret]);
	}
	return ret;
};

BigInteger.prototype.toDERInteger = function () {
	return new Buffer(this.toByteArray(true));
};

BigInteger.fromDERInteger = function (buf) {
	var x = nbi();
	x.fromString(buffer_to_ui8a(buf), 256, false);
	return x;
};

BigInteger.prototype.toByteArrayUnsigned = function () {
	return new Uint8Array(this.toBuffer());
};

BigInteger.fromByteArrayUnsigned = function (b) {
	return BigInteger.fromBuffer(new Buffer(b));
};

BigInteger.prototype.toHex = function (size) {
	return this.toBuffer(size).toString('hex');
};

//-----------------------------------------------
// 
// A very minimal Uint16Array pool.  If we ask for array size n,
// we get one of size m >= n.  If we find arrays smaller than that in the
// pool, then we just discard them and redo it.
//

var __uint16array_pool = [];

function get_uint16_array (l) {
	var a;
	while (__uint16array_pool.length) {
		var a = __uint16array_pool.pop();
		if (a.length >= l) {
			return a;
		}
	}
	return new Uint16Array(l);
};

function put_uint16_array(a) {
	__uint16array_pool.push(a);
};

// end of array pool
//-----------------------------------------------


BigInteger.prototype.square2to = function (r) {

	// We've hardcoded for 28-bit representation, out of laziness.
	if (dbits != 28) {
		return this.multiplyTo(this,r);	
	}

	var x = this.abs();
	var i;
  
  	// Input array in base 2^14, twice as big as the input array
  	var u_len = x.t << 1;
	var u = get_uint16_array(u_len);

  	// Output array in base 2^14, twice as big as u
  	var v_len = u_len << 1;
	var v = get_uint16_array(v_len);

	// Note that below, we shouldn't use v.length or u.length, since we
	// only know that u_len <= u.length, and v_len <= v.length, by our
	// array pool construction.  This is easy to workaround as long as
	// we know what is us.

	// Extract to base14 array u.  We're going to be operating
	// on this array.
	var j = 0;
	for (i = 0; i < x.t; i++) {
		u[j++] = (x[i] & 0x3fff);
		u[j++] = (x[i] >> 14);
	}

	var c = 0; // the carry field
	var k = 0;
	var min_j, max_j, tot;
	var v_lim = v_len - 1;
	var i_lim;
	var sum8;
	var k;

	for (i = 0; i < v_lim; i++) {


		// The name of the game is to loop with:
		//
		//  if (i < u_len) {
		//    min_j = 0;
		//	  max_j = i+1;
		//  } else {
		//    min_j = (i - u_len + 1);
		//	  max_j = u_len
		//  }
		//
		//  And while j < (i-j), since we're going to double.
		//  for the other symmetric side. This is of course the
		//  primary optimization of this squaring routine.
		//  
		//  We can rewrite j<(i-j) as j<i/2, so in the max_j
		//  in both branches, we take the MIN of max_j and i/2.
		//  

		// Compute Math.ceil(i/2)
		ceil_i_over_2 = (i >> 1);
		if ((i & 1) != 0) { ceil_i_over_2++; }

		if (i < u_len) {
			min_j = 0;
			max_j = ceil_i_over_2; 
		} else {
			min_j = (i - u_len + 1);
			max_j = u_len;
			if (max_j > ceil_i_over_2) { max_j = ceil_i_over_2; }
		}

		// Initialize the total with the carry from the previous iteration
		tot = c;
		c = 0;
		j = min_j;

		// Loop over all of the cross-terms (which are all doubled)
		while ( j < max_j - 8) {
			k = i - j;
			sum8 = (u[k  ]|0) * (u[j  ]|0)
			     + (u[k-1]|0) * (u[j+1]|0)
			     + (u[k-2]|0) * (u[j+2]|0)
			     + (u[k-3]|0) * (u[j+3]|0)
			     + (u[k-4]|0) * (u[j+4]|0)
			     + (u[k-5]|0) * (u[j+5]|0)
			     + (u[k-6]|0) * (u[j+6]|0)
			     + (u[k-7]|0) * (u[j+7]|0);

		    // This is cute hack to avoid the (<< 1) that we typically do
		    // for all of the cross terms. In the tot case, we do it normally
		    // (but mask off 0x1fff rather than 0x3fff bits).  In the 'c' case
		    // we shift over 13 rather than 14 bits.
			tot += ((sum8 & 0x1fff) << 1);
			c   += (sum8 >>> 13);
			j   += 8;
		}

		while (j < max_j - 4) {
			k = i - j;
			tot += (((u[k  ]|0) * (u[j  ]|0)
			    +    (u[k-1]|0) * (u[j+1]|0)
			    +    (u[k-2]|0) * (u[j+2]|0)
			    +    (u[k-3]|0) * (u[j+3]|0)) << 1);
			j += 4;
		}

		for ( ; j < max_j; j++) {
			tot += (((u[(i-j)]|0) * (u[j]|0)) << 1);
		}

		// Add the square terms (not-doubled). If applicable.
		if (i === (j << 1)) {
			tot += (u[(i-j)]|0) * (u[j]|0);
		}

		// Finally, split into a result and a carry term.
		v[i] = (tot & 0x3fff); 
		c += (tot >>> 14);
	}

	// Leave the carry in the top slot.
	v[v_len - 1] = c;

	// Copy from the base-2^14 v back into the result r
	r.s = 0;
	j = 0;
	for (i = 0; i < v_len; i+= 2) {
		r[j++] = (v[i] | (v[i+1] << 14));
	}

	// Put these back so we can use them next time.
	put_uint16_array(u);
	put_uint16_array(v);

	r.t = j;
	r.clamp();
};

BigInteger.prototype.square2 = function () {
	var r = nbi();
	this.square2to(r);	
	return r;
};

module.exports = { 
	BigInteger : BigInteger,
	nbi : nbi,
	nbv : nbv,
	Montgomery : Montgomery,
	Classic : Classic,
	nbits : nbits
};
