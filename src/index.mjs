import http from 'http'

import log from '@magic/log'

import handler from './handler.mjs'

export const run = async (args) => {
  const startTime = log.hrtime()

  const { port = 5321, host = '127.0.0.1', dir = 'public' } = args

  try {
    const server = http.createServer(handler)

    server.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
    })

    server.listen(port, host, () => {
      log.success('Mainthread started', `pid: ${process.pid}`)
      log(`server listening to ${host}:${port}`)

      log.timeTaken(startTime, 'startup needed:')
    })
  } catch (e) {
    log.error(e)
    process.exit(1)
  }
}

export default run
