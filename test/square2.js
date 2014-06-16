
var fixtures = require('./fixtures/square2');
var BigInteger = require('..').BigInteger;
var assert = require('assert')

describe('Square2', function () {
	it("should compute square2 properly", function () {
		var data = fixtures.tests;
		for (var i = 0; i < data.length; i++) {
			var b = new BigInteger(data[i], 10);	
			var s1 = b.multiply(b);
			var s2 = b.square2();
			assert(s1.equals(s2));
		}
	});
});