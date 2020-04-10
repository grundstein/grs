# @grundstein/grs

### WIP. NOT IN PRODUCTION, TESTED AND/OR BENCHMARKED YET!

## grs: grundstein redirection service

### features:

#### https redirection

redirects all http requests to https

#### letsencrypt certificates

serves /.well-known via http,
for all hosts in [gps](https://github.com/grundstein/gps) host list.

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

// serve on specific host and port
grs --host grundstein.it --port 2323
```
