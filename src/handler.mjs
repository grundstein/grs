import { log } from '@grundstein/commons'

import { enhanceRequest, formatLog, getHostname } from '@grundstein/commons/lib.mjs'

export const handler = (req, res) => {
  const startTime = log.hrtime()

  req = enhanceRequest(req)

  let hostname = getHostname(req)

  // strip www from the domain
  if (hostname.startsWith('www.')) {
    hostname = hostname.replace('www.', '')
  }

  res.writeHead(302, {
    Location: `https://${hostname}${req.url}`,
  })

  res.end()

  formatLog(req, res, startTime, 302)
}

export default handler
