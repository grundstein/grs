import URL from 'url'

import { log } from '@grundstein/commons'

import {
  formatLog,
  getHostname,
  getRandomId,
} from '@grundstein/commons/lib.mjs'

export const handler = async (req, res) => {
  // assign random id to make this call traceable in logs.
  req.id = await getRandomId()

  const startTime = log.hrtime()

  const hostname = getHostname(req)

  res.writeHead(302, {
    Location: `https://${hostname}${req.url}`,
  })

  res.end()

  formatLog(req, res, startTime, 302)
}

export default handler
