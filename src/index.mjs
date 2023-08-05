import http from 'node:http'

import { log, lib } from '@grundstein/commons'

import handler from './handler.mjs'

export const run = async (config = {}) => {
  config.startTime = log.hrtime()

  try {
    const server = http.createServer(handler)
    server.listen(config.port, () => {
      const currentDate = lib.getCurrentDate()

      log(
        `{"type": "info", "date": "${currentDate.date}", "time": "${currentDate.time}", "msg": "grs server started" }`,
      )
    })
  } catch (e) {
    log.error(e)
    process.exit(1)
  }
}

export default run
