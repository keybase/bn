
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

BigInteger.prototype.square2to = function (r) {
	var x = this.abs();

	var i = x.t*2;
	r.t = i;

	var u = new Uint32Array(x.t << 1);      // Input array in base 2^14
	var v = new Uint32Array(u.length << 1); // Output array in base 2^14

	// Extract to base14.
	var j = 0;
	for (i = 0; i < x.t; i++) {
		u[j++] = (x[i] & 0x3fff);
		u[j++] = (x[i] >> 14);
	}
	console.log(u);

	var c = 0; // the carry field
	var k = 0;
	for (i = 0; i < v.length - 1; i++) {
		var min_j;
		var max_j;
		if (i < u.length) {
			min_j = 0;
			max_j = i;
		} else {
			max_j = u.length - 1;
			min_j = (i - u.length + 1);
		}

		console.log("@ i -> " + i + " " + min_j + " " + max_j);
		var tot = c;
		for (j = min_j; j <= max_j; j++) {
			console.log("@ j -> " + j);
			var k = (i - j);
			if (j <= k) {
				console.log("@ k -> " + k);
				var y = u[k] * u[j];
				// It gets counted twice for cross-products, and once for 
				// square terms.
				if (k != j) { y = y << 1; }
				console.log("y -> " + y);
				tot += y;
			}
		}
		v[i] = (tot & 0x3fff); 
		c = (tot >> 14);
		console.log(v[i] + " & " + c);
	}
	v[v.length - 1] = c;
	console.log(v);

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
