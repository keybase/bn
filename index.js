
var engine = null;
try {
	var mod = "big" + "int";
	var backend = require(mod);
	engine = require("./lib/fast");
} catch (e) {
	engine = require("./lib/pure");
};

for (var k in engine) {
	exports[k] = engine[k];	
}