import URL from 'url'

import mimes from '@magic/mime-types'
import log from '@magic/log'
import is from '@magic/types'

import { lib } from '@grundstein/commons'
const { formatLog, getFileEncoding, getRandomId, respond, sendFile } = lib

const getHostName = r => r.hostname || r.headers['x-forwarded-host'] || r.headers.host || ''

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
