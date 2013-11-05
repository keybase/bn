
var engine = null;
var modules = [ "bigint", "bignum" ];
for (var i in modules) {
	console.log("trying " + modules[i]);
	try {
		engine = require(modules[i]);
		console.log("ok using engine " + modules[i]);
		break;
	} catch (e) {}
}
exports.engine = engine;