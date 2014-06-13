##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTmvCdAAoJEJgKPw0B/gTfnFEH/2CyKOITd3JYAMr1yrtfJqrd
xYZ9L+QCufzdwba5eBTvkY0wKqdw5zB/n3pMPfq4OHjHeTHK/mOo6dGxAln7S7op
Hqm8IxyxaI43hxpMKVlACz6O9neXWJ7qQ15RD5LHYaBsS/l4czlYpXNqE1DwOTDC
Jt8xcWmtDjBzZr8QMkOq8wlk4abW94bdXjr4X5kB6OKwCMrPM5ENSE6lXvnnD7bx
GwDlWOKi+xaSfA/Ze9LLAwAA3v/SsXBv2sdO/SEQhmY9ee9uBSjX7z0dBYf0hGer
NJf2Pwh5PK07cWOU+bJO7Pi4sgRD2TCzrcUUuPGyVKC3l75Q8StW6WQDxSjNtjY=
=JKRU
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
97             .gitignore    d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
78             CHANGELOG.md  04728c795e3b4f530930ba6f310722092293dc4dbccaf9e56522c92f6f0c66e1
445            Makefile      3b14c6e3e64017982cc838025744e8d9afe04a4473dc092fa2092726acaffb82
24             README.md     2c3ee7372f4dfd4c968ffd31f8d0cfef13128a355471a2bfaee22e746fc4cbc4
181            index.js      874f53ed6ff13e2e19617a0ce9337a875b31144f0ec31d6ad84db077332bcfa6
               jsbn/                                                                         
16330            jsbn.js     27867741662be83a640e90d848ad484300cd6a819032ab389ec529cca58d8d32
20363            jsbn2.js    819d969384ec861b5adecbdc24946146fa09c0c34cfc07c9c258f6cf2520e298
               lib/                                                                          
3902             fast.js     dd36e73ccb07ef20e6eca485d96bf1cbbdda327c2312fa54cd0c14708931ca6f
40124            pure.js     db3604f4a77289f800b59f94692f6431856a9646d288326f110886428f50a12e
173              wrap.js     5194e54d9a96da71bfe08ae4d418ae2b131bb3c23c2a80e0d981543b5b5c2cc2
373            package.json  8adcbad92cb1d098a29f18c5d543794396d7e74f0cfd1f9a95c94df959d71996
               pkg/                                                                          
752              post.js     50961ed0396dc5d97bc2a1ce146c201c8c305ee4fc913629c3fd9bb9b907f39e
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