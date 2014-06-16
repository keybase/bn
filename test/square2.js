
var fixtures = require('./fixtures/square2');
var BigInteger = require('..').BigInteger;
var assert = require('assert')

describe('Square2', function () {
	it("should compute square2 properly", function () {
		var data = fixtures.tests;
		for (var i = 0; i < data.length; i++) {
			var b = new BigInteger(data[i], 10);	
			var s1 = b.multiply(b);
			console.log(i);
			console.log(b);
			console.log(JSON.stringify(b));
			console.log(s1);
			var s2 = b.square2();
			console.log(s2);
			assert(s1.equals(s2));
		}
	});
});