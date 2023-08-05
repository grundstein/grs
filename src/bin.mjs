#!/usr/bin/env node

import { cli } from '@grundstein/commons'

import run from './index.mjs'

const opts = {
  options: [
    ['--host', '--ip', '-H'],
    ['--port', '-p'],
  ],
  default: {
    '--host': '0.0.0.0',
    '--port': 8080,
  },
  single: ['--host', '--port'],
  help: {
    name: 'grundstein redirect service',
    header: 'redirects http to https and www.domain.com to domain.com.',
    options: {
      '--host': 'internal hostname to listen to',
      '--port': 'port',
    },
    example: `
# simple, listen to 0.0.0.0:8080 and redirect all requests to https://hostname
grs

# redirects from http://www.grundstein.it:2323 to https://grundstein.it
# this service expects another service to run on port 80 or an iptable rule that redirects port 80 to it's port!
grs --host grundstein.it --port 2323

# run using port 80
sudo grs --host grundstein.it --port 80
`,
  },
}

const { args } = cli(opts)

run(args)
