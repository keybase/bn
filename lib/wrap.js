
var engine = null;
var modules = [ "bigint", "bignum" ];
for (var i in modules) {
	try {
		engine = require(modules[i]);
	} catch (e) {}
}
exports.engine = engine;