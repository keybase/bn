
function buffer_to_ui8a (buffer) {
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
    // workaround the bugginess of their sign bit manipulation.
	nbi().fromString(buffer_to_ui8a(buf), 256, true);
	return this;
};


module.exports = { 
	BigInteger : BigInteger,
	nbi : nbi,
	nbv : nbv,
	Montgomery : Montgomery,
	Classic : Classic,
	nbits : nbits
};
