
var engine = require('./lib/wrap').engine;
if (!engine) {
	engine = require("./lib/pure");
};

for (var k in engine) {
	exports[k] = engine[k];	
}