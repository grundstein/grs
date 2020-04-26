#!/usr/bin/env node

import { cli } from '@grundstein/commons'

import run from './index.mjs'

const opts = {
  options: [
    ['--help', '-help', 'help', '--h', '-h'],
    ['--host', '-h'],
    ['--port', '-p'],
  ],
  default: {
    '--host': '0.0.0.0',
    '--port': 8080,
  },
  single: ['--host', '--port'],
  help: {
    name: 'grundstein redirect service',
    header: 'redirects http to https.',
    options: {
      '--host': 'internal hostname to listen to',
      '--port': 'port',
    },
    example: `
# simple, listen to 0.0.0.0:8080 and redirect all requests to https://hostname
grs

# serve files using a custom host and port:
grs --host grundstein.it --port 2323
`,
  },
}

const { args } = cli(opts)

run(args)
