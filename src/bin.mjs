#!/usr/bin/env node

import cli from '@magic/cli'

import run from './index.mjs'

const args = {
  options: [
    ['--help', '-help', 'help', '--h', '-h'],
    ['--host', '-h'],
    ['--port', '-p'],
  ],
  default: {
    '--host': '127.0.0.1',
    '--port': 5321,
  },
  single: ['--host', '--port'],
  help: {
    name: 'grundstein redirect service',
    header: 'redirects http to https, serves /.well-known for all grundstein hosts.',
    options: {
      '--host': 'internal hostname to listen to, default 127.0.0.1',
      '--port': 'port, default 5321',
    },
    example: `
# simple
grs

# serve files using a custom host and port:
gs-server serve --host grundstein.it --port 80
`,
  },
}

const res = cli(args)

run(res)
