# @grundstein/grs

### WIP. NOT IN PRODUCTION YET!

## grundstein redirect service

redirects all http requests to https

serves /.well-known via http,
for all hosts in [gps](https://github.com/grundstein/gps) host list.
this is needed for letsencrypt certificates.

#### installation
```bash
npm i @grundstein/grs
```

#### usage
```bash
// show full help
grs --help

// serve the ./public directory
grs

// serve specific directories
grs --host grundstein.it --port 2323
```
