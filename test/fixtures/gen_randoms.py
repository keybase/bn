
import random
import json

out = []

for i in range(1,60000):
    out.append("%s" % random.getrandbits(160))

print "module.exports = {"
print "  \"tests\" : %s" % json.dumps(out, indent=4)
print "};"

