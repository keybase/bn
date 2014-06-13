##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTmwPQAAoJEJgKPw0B/gTfJR8IALNDDi8AQVjd9F6Ig98CAuuK
XC5QHeGcVQJ569SSy0SftbdsTnmK7a5JmRESSJSzYQxgNp5UQ9IqSDuJpTdNPTBG
9nkEp+4XojLJE2yPBDiPQGJSUwRWcWfc1ZWfOQUtDaVW96ao5UuJ6Vn8u+mdFOS2
/0Mzjd/sEGJZdXSm7nW8Dd1OuBukHnEg/AETcaD7bI2bnKyDPhYtw9pmrhKV4sZM
yS5gaoQl0iGtaIxZs8PK4W5aoDM2Pcc/zv2IdHxhd9dF2/Q0IemUEUklnx9NlHDg
sQXduSKYbfeLQmOoTl63b+vltCq5o94/ICJIDGB1MiYJJV7e+hqKM42ORe42OMw=
=fbrg
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
97             .gitignore    d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
221            CHANGELOG.md  1fbcfbfd91e5ee037e63d40916e6dd2577a4771742f10c097efc71a3bd566d3a
445            Makefile      3b14c6e3e64017982cc838025744e8d9afe04a4473dc092fa2092726acaffb82
24             README.md     2c3ee7372f4dfd4c968ffd31f8d0cfef13128a355471a2bfaee22e746fc4cbc4
181            index.js      874f53ed6ff13e2e19617a0ce9337a875b31144f0ec31d6ad84db077332bcfa6
               jsbn/                                                                         
16330            jsbn.js     27867741662be83a640e90d848ad484300cd6a819032ab389ec529cca58d8d32
20363            jsbn2.js    819d969384ec861b5adecbdc24946146fa09c0c34cfc07c9c258f6cf2520e298
               lib/                                                                          
4097             fast.js     b12f79198a07cd2da2538f83ec375a9a3bae7c48801606a384e2e9d57fe9ce0c
40234            pure.js     81835fd7f30afc788945c57af92ec49e91fdaa0e32d3b2113938d7b85c3224a9
173              wrap.js     5194e54d9a96da71bfe08ae4d418ae2b131bb3c23c2a80e0d981543b5b5c2cc2
373            package.json  15f5f383bb2e5a290e8273f1640e344974027f6ff6c7fec156360ba5b5fa29c3
               pkg/                                                                          
854              post.js     a31cf5bcc7a57930588b7181fe68f3ccf5df23eb3c1a8be925035b22f19d853d
0                pre.js      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing