##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTnzT5AAoJEJgKPw0B/gTfcL0H/j9E2ZQ66q2m86z9L/mMW8l5
Hig2aE4CXPYKf/KY5MUMuwaabBHLZyoyW9GzhVOeb/BTAeuSAb+fFOOB2LWPGxD1
ZGJG+HYayT4WtymvQb+i+FTa8BJeci6lTvgNnyCuKWzrUFNktOyI9wUIwXeFBP0a
5L4/UXELx/JKH3F2HBavk5+CpRNRCilDE59m/Ji1rJgr+FmfpRj7PD9gM5ChyBKH
DUYCE+PrgLUnyoupV6tWd3PJDUK3J+CxAaddhc3xIZ5WLVVssdwlYSsV/HXbNZct
OkLfty6CvpeLXqXVGfctHbekRE+HcQCfdDoVAUsW7NOwloT1QyxNAMlfkl7txNM=
=spPw
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file              contents                                                        
             ./                                                                                
97             .gitignore      d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
585            CHANGELOG.md    17cf3de6066d9dda977a76f035aa8b1d126bbf064353915e7827ee764bc2800c
462            Makefile        8c6a7f657416170fcc15e6582dfc99a44d779bb5b4005c74b0b53aa01fde8a3b
24             README.md       2c3ee7372f4dfd4c968ffd31f8d0cfef13128a355471a2bfaee22e746fc4cbc4
               benchmark/                                                                      
1933             binary.js     16af13038b1eddedbd309f35ee65ff38684aade376bd797c3b52837418552b7f
                 fixtures/                                                                     
1654               gen.js      f704d8c859978626010ecb7a2c1452e89c63b80a4e852cee4a80fbc7278cc4e5
5347               ops.json    0a9fc00f27f480fb466961b919646cff852bf359071eeda844b252ca289382b8
178              package.json  9754a4ace78d5525884ee3ed74a019acbecf788e28ee756bd2330743b7be854d
1539             unary.js      501218859e573c8a08985059cec7e258c18d5e950be1bb81a9c13799c2fdff5b
181            index.js        874f53ed6ff13e2e19617a0ce9337a875b31144f0ec31d6ad84db077332bcfa6
               jsbn/                                                                           
16443            jsbn.js       21383d94091e39fc0c640fe90198fc4be47ff3ce182e1a621903198e03190ccf
20415            jsbn2.js      7de1144ee3c572495d0a51b73f912118ec1b75cee85daff04badda14fb080064
               lib/                                                                            
8733             fast.js       47dee41b90fe8ac4dda5fd8b743dfadf5cad1d913d91d982fae015bcc7f3e280
41995            pure.js       2dbb10a8ab3f28c3718d53dd19287a65ed2347bc6006f4f664065726725b53b3
173              wrap.js       5194e54d9a96da71bfe08ae4d418ae2b131bb3c23c2a80e0d981543b5b5c2cc2
355            package.json    617a1e4d7f0d39e1b46f86a52358466693be532b4769db9fa61d787c8c51bbae
               pkg/                                                                            
2313             post.js       13fa40a044c233dbb3eeb671f4f736453e444b9d6d7fdf17aee8e7d23ef0c176
1                pre.js        01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b
               test/                                                                           
9585             bigi.js       c9214a1174f9d6bfcc9be388b94ac054a39a49126b060e1c0cb0b1c7614b7b88
2664             convert.js    5ef21ddfad519eedc38f6139e2b337b46e0d6530affeb95940f8a02d3c22efdd
                 fixtures/                                                                     
4129               convert.js  6b075ec8f4dbd432b0c2b41e2d6e5aeda35c03a5a0118de55b8e0ae06df63aff
39               mocha.opts    74ff3e60361757523c9cacc452540490fb2deec1bace92f82b12c06702a4e1ba
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