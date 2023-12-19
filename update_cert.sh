printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:local.itemscout.io\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth" \
| openssl req -x509 -out itemscout_local.crt -keyout itemscout_local.key \
  -newkey rsa:2048 -nodes -sha256 -days 1000 \
  -subj '/CN=localhost' -extensions EXT -config /dev/stdin