##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTmvl1AAoJEJgKPw0B/gTf+L8IAK7ug5aeudkLrTVljFk5mNCw
batv9k75W5Tax0UgyDmi7SpneK3ZsXOrmuU6E/K+5dEuUPnp3fHzXpugfQrCccaw
jDrnFr/pESJdZsnv6LptdbReJWGtN5Kzq3jkOVkiOn3Y+e8zGmRpzNG+xKL0Vbm8
JKl0knhiHLYEUljm9NtcaeI2myB7RuAH5ZZrT1YudtAt/FPHyPUbGzzUaHGXcE9f
EHOUSB6ECRf6ZH/oNqXDxt0Y3zw32C3tDgYmkNgIne8WCQOHgBmA2lyQTgd4zauj
LqUYZbaQg5jFcm9N0udZKR5v2RxaVCamlJ0Q1AalL9+oBeQ/7/l54G/jFg5Xmm0=
=e6hu
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
97             .gitignore    d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
170            CHANGELOG.md  e9d15555b632bbd6a75c4cf69325068b0d0c7e503c27f5aacec0e6337582d321
445            Makefile      3b14c6e3e64017982cc838025744e8d9afe04a4473dc092fa2092726acaffb82
24             README.md     2c3ee7372f4dfd4c968ffd31f8d0cfef13128a355471a2bfaee22e746fc4cbc4
181            index.js      874f53ed6ff13e2e19617a0ce9337a875b31144f0ec31d6ad84db077332bcfa6
               jsbn/                                                                         
16330            jsbn.js     27867741662be83a640e90d848ad484300cd6a819032ab389ec529cca58d8d32
20363            jsbn2.js    819d969384ec861b5adecbdc24946146fa09c0c34cfc07c9c258f6cf2520e298
               lib/                                                                          
4010             fast.js     5d420963cc8423f2be105fc827fd6c18878474e4c000ede8e4f8cac76bb50c8c
40234            pure.js     81835fd7f30afc788945c57af92ec49e91fdaa0e32d3b2113938d7b85c3224a9
173              wrap.js     5194e54d9a96da71bfe08ae4d418ae2b131bb3c23c2a80e0d981543b5b5c2cc2
373            package.json  444ee0d46e0219acb51ddaba4b3149963941e3537eb232986732d6eb24fbb87b
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