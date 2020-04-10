import URL from 'url'

import mimes from '@magic/mime-types'
import log from '@magic/log'
import is from '@magic/types'

import { lib } from '@grundstein/commons'
const { formatLog, getFileEncoding, getRandomId, respond, sendFile } = lib

const getHostName = r => r.hostname || r.headers["x-forwarded-host"] || r.headers.host || ""

export const handler = async (req, res) => {
  // assign random id to make this call traceable in logs.
  req.id = await getRandomId()

  req.headers['x-forwarded-for'] = req.id

  const startTime = log.hrtime()

  const parsedUrl = URL.parse(req.url)

  if (parsedUrl.pathname.startsWith('/.well-known')) {
    respond(res, { body: 'ohai', code: 200 })

    formatLog(req, res, startTime, 200)
    return
  }

  const host = getHostName(req)

  res.writeHead(302, {
    'Location': `https://${host}${req.url}`,
  })

  res.end()

  formatLog(req, res, startTime, 302)
}

export default handler
