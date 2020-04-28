import { log } from '@grundstein/commons'

import { createServer } from '@grundstein/commons/lib.mjs'

import handler from './handler.mjs'

export const run = async (config = {}) => {
  config.startTime = log.hrtime()

  try {
    await createServer(config, handler)
  } catch (e) {
    log.error(e)
    process.exit(1)
  }
}

export default run
