import http from 'http'

import { log, middleware } from '@grundstein/commons'

import handler from './handler.mjs'

export const run = async (args) => {
  const startTime = log.hrtime()

  const { port = 5321, host = '127.0.0.1', dir = 'public' } = args

  try {
    const server = http.createServer(handler)

    const clientError = middleware.clientError({ host, port, startTime })

    server.on('clientError', clientError)

    const listener = middleware.listener({ host, port, startTime })

    server.listen(port, host, listener)
  } catch (e) {
    log.error(e)
    process.exit(1)
  }
}

export default run
