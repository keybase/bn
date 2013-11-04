(function (){

	var bigint = require("./wrap").engine;

	function BigInteger (v) {
		this._v = v
	}

	function nbi() { return new BigInteger(bigint(0)); }
	function nbv(i) { return new BigInteger(bigint(i)); }

	BigInteger.prototype.bitLength = function () {
		return this._v.bitLength();
	};

	BigInteger.prototype.modPowInt = function (i,n) {
		return new BigInteger(this._v.powm(bigint(i),n)	);
	};

	BigInteger.prototype.testBit = function (i) {
		var bi = bigint(1).shiftLeft(i);
		var tmp = this._v.and(bi);
		var ret = tmp.eq(bigint(0)) ? 0 : 1;
		return ret;
	};

	BigInteger.prototype.setBit = function (i) {
		var mask = bigint(1).shiftLeft(i);
		return new BigInteger(this._v.or(mask));
	};

	BigInteger.prototype.shiftLeft = function (i) {
		return new BigInteger(this._v.shiftLeft(i));
	};

	BigInteger.prototype.shiftRight = function (i) {
		return new BigInteger(this._v.shiftRight(i));
	};

	BigInteger.prototype.compareTo = function (b) {
		return this._v.cmp(b);
	};

	BigInteger.prototype.modPow = function (e, n) {
		return new BigInteger(this._v.powm(e,n));
	};

	BigInteger.prototype.square = function() {
		return new BigInteger(this._v.mul(this._v));
	};

	BigInteger.prototype.mod = function (m) {
		return new BigInteger(this._v.mod(m));
	};

	BigInteger.prototype.intValue = function () {
		return this._v.toNumber();
	};

	BigInteger.prototype.subtract = function (x) {
		return new BigInteger(this._v.sub(x));
	};

	BigInteger.prototype.add = function(x) {
		return new BigInteger(this._v.add(x));
	};

	BigInteger.prototype.multiply = function (x) {
		return new BigInteger(this._v.mul(x));
	};

	BigInteger.prototype.gcd = function (x) {
		return new BigInteger(this._v.gcd(x));
	};

	BigInteger.prototype.fromString = function (s, base) {
		// Ignore the current object, that's cool....
		return new BigInteger(bigint(s, base));
	};

	BigInteger.prototype.toByteArray = function () {
		return this._v.toBuffer();
	};

	BigInteger.prototype.getLowestSetBit = function () {
		var bl = this._v.bitLength();
		var ret = -1;
		var mask = bigint(1);
		var zed = bigint(0);
		for (var i = 0; i < bl && ret < 0; i++) {
			if (!mask.and(this._v).eq(zed)) {
				ret = i;
			} else {
				mask = mask.shiftLeft(1);
			}
		}
		return ret;
	};

	BigInteger.prototype.modInverse = function (n) {
		return new BigInteger(this._v.invertm(n));
	};

	function nbits(bi) { return bi._v.bitLength(); }

	BigInteger.ZERO = nbv(0);
	BigInteger.ONE = nbv(1);

	module.exports = {
		BigInteger : BigInteger,
		nbi : nbi,
		nbv : nbv,
		nbits : nbits
	};

})(this);