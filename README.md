## @grundstein/grs

**g**rundstein **r**edirection **s**ervice

listens to all incoming http requests and upgrades them to https.

### WIP. NOT FULLY AUTOMATED, TESTED AND BENCHMARKED YET!

### features:

#### https redirection

redirects all http requests to https

#### www. removal
redirects www.domain.name to domain.name

#### installation
```bash
npm i @grundstein/grs
```

#### usage
```bash
# show full help
grs --help

# listen to port 8080 and redirect all incoming requests.
grs

# serve on specific host and port
grs --host grundstein.it --port 2323
```

#### changelog

##### v0.0.1
first release

##### v0.0.2
update dependencies

##### v0.0.3
update dependencies

##### v0.0.4
update dependencies

##### v0.0.5
update dependencies

##### v0.0.6 - unreleased
...

