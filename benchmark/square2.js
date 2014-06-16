var assert = require('assert');
var benchmark = require('benchmark');
benchmark.options.minTime = 1;

var BigInteger = require('..').BigInteger;
var fixtures = require('./fixtures/sq2');

var suites = []
var i = 0;
fixtures.forEach(function (f) {
	var x = new BigInteger(f);
	var suite = new benchmark.Suite()
	suite.__name = "#" + i;

	suite.add("square2(" + x.toString() + ")", function () {
		var actual = x.square2();
	});
	suite.add("square1(" + x.toString() + ")", function () {
		var actual = x.square();
	});
	suite.add("x.mult(" + x.toString() + ")", function () {
		var actual = x.multiply(x);
	});

	suite.on('cycle', function (event) {
	    console.log('*', String(event.target))
	});

	// other handling
	suite.on('complete', function() {
        console.log('')
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    });

	suite.on('error', function(event) {
        throw event.target.error
	});
	suites.push(suite);
});

// run tests after set up, less chance of error
suites.forEach(function(suite) {
  console.log('--------------------------------------------------')
  console.log('Benchmarking: ' + suite.__name);

  suite.run()
})
