import URL from 'url'

import mimes from '@magic/mime-types'

import { log, is } from '@grundstein/commons'
import {
  formatLog,
  getFileEncoding,
  getHostname,
  getRandomId,
  respond,
  sendFile,
} from '@grundstein/commons/lib.mjs'

export const handler = async (req, res) => {
  // assign random id to make this call traceable in logs.
  req.id = await getRandomId()

  const startTime = log.hrtime()

  let host = getHostName(req)
  if (host.includes(':')) {
    host = host.split(':')[0]
  }

  res.writeHead(302, {
    Location: `https://${host}${req.url}`,
  })

  res.end()

  formatLog(req, res, startTime, 302)
}

export default handler
