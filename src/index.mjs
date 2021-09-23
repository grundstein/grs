import { lib, log } from '@grundstein/commons'

import handler from './handler.mjs'

export const run = async (config = {}) => {
  config.startTime = log.hrtime()

  try {
    await lib.createServer(config, handler)
  } catch (e) {
    log.error(e)
    process.exit(1)
  }
}

export default run
