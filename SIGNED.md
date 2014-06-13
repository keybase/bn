##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTm1nhAAoJEJgKPw0B/gTfjwUIAKCjYpf6qrVGz6KEB3iV1FbB
VvcmILTOvrt4CZ4muXZ23IGzUrHqhBNVf0eMtj7qTGa+tZy2OmqjXa++0eMPZxv7
R1SJiqnm4QMXvUlxWov+tJVDabVV7KcjgQvVf4isBn1dhMRxwQZxBO84sTzf0FYg
LcjWPw9vrtA5apNVhz4XLoVwTTju/QMYgISCLlqQ/+Pqrv+xR4UyNf0yif7PQXmy
GNWhImn6YQHl4qYOn8ckbu4gYa8BvglGb8FnfkiHVO5DrjlYej/2sWR3KWZ23b/A
2uM9W644JmgW/vO8G0MQJKICxfaZuT9HoOcjzXlL9/AfP1QGozDDrPe1Zz8KJ1w=
=8S7O
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
97             .gitignore    d11ca7319245e37c399ba3a881caf35ab073d95bf755351df4ec899077173ba3
314            CHANGELOG.md  2a9f6bf692d83c0756a9f5481c9da53e00edd653ca8a10745f45e886e24ba0b4
445            Makefile      3b14c6e3e64017982cc838025744e8d9afe04a4473dc092fa2092726acaffb82
24             README.md     2c3ee7372f4dfd4c968ffd31f8d0cfef13128a355471a2bfaee22e746fc4cbc4
181            index.js      874f53ed6ff13e2e19617a0ce9337a875b31144f0ec31d6ad84db077332bcfa6
               jsbn/                                                                         
16330            jsbn.js     27867741662be83a640e90d848ad484300cd6a819032ab389ec529cca58d8d32
20363            jsbn2.js    819d969384ec861b5adecbdc24946146fa09c0c34cfc07c9c258f6cf2520e298
               lib/                                                                          
5513             fast.js     e381ee436b252e8eb06df1341d4efdb399d89deda62c628b237b1f4887367c0a
40845            pure.js     d197fb3a293aef728deb1889033cd66c324f4f336f37cb012b969911ee231317
173              wrap.js     5194e54d9a96da71bfe08ae4d418ae2b131bb3c23c2a80e0d981543b5b5c2cc2
373            package.json  6bc0d9d61d95eb45b1cd216a5375867e8f51fcebcb1d64500c03533011ebc99c
               pkg/                                                                          
1408             post.js     89c105aaa3ee3d5b6873fd6f187c324f314ad2a0b4847e10c639c780a532cb88
1                pre.js      01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b
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