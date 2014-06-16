
import random
import json

out = []

for i in range(1,7000):
    out.append("%s" % random.getrandbits(i))

print "module.exports = {"
print "  \"tests\" : %s" % json.dumps(out, indent=4)
print "};"

