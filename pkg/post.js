
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

var u;
var v;

BigInteger.prototype.square2to = function (r) {
	var x = this.abs();
	var y;

	var i = x.t*2;
	r.t = i;

	if (!u || u.length != (x.t << 1)) {
		u = new Uint32Array(x.t << 1);      // Input array in base 2^14
	}
	if (!v || v.length != (u.length << 1)) {
		v = new Uint32Array(u.length << 1); // Output array in base 2^14
	}

	// Extract to base14.
	var j = 0;
	for (i = 0; i < x.t; i++) {
		u[j++] = (x[i] & 0x3fff);
		u[j++] = (x[i] >> 14);
	}

	var c = 0; // the carry field
	var k = 0;
	var min_j, max_j, tot; y;
	for (i = 0; i < v.length - 1; i++) {

		if (i < u.length) {
			min_j = 0;
			max_j = i;
		} else {
			max_j = u.length - 1;
			min_j = (i - u.length + 1);
		}
		tot = c;
		for (j = min_j; j <= max_j; j++) {
			k = (i - j);

			// Note that this is a more direct way to do this, 
			// to adjust max_j to reflect the condition that:
			//
			// j<=k implies j<=(i-j) implies  2j<=i implies j<=Math.ceil(i/2)
			//
			// However, this is way easier to read, so let's keep it as
			// is.  The is the main optimization, that we don't need to
			// do the second half the expansion....
			if (j > k) { break; }

			// There might be one overlap due to whether there were an
			// even or odd number of 14-bit 
			y = ((u[k]|0) * (u[j]|0)|0);
			// It gets counted twice for cross-products, and once for 
			// square terms.
			if (k != j) { y = y << 1; }

			tot += y;

		}
		v[i] = (tot & 0x3fff); 
		c = (tot >> 14);
	}
	v[v.length - 1] = c;

	// Copy from the base-2^14 v back into the result r
	r.s = 0;
	j = 0;
	for (i = 0; i < v.length; i+= 2) {
		r[j++] = (v[i] | (v[i+1] << 14));
	}

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
