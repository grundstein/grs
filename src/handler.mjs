import { log } from '@grundstein/commons'

import { enhanceRequest, formatLog, getHostname, respond } from '@grundstein/commons/lib.mjs'

export const handler = (req, res) => {
  if (!req.url.startsWith('/') || req.url.includes('://')) {
    req.socket.destroy()

    // respond(req, res, {
    //   body: '418 - I am a Teapot',
    //   code: 418,
    //   type: 'tea',
    //   getFullIp: true,
    // })

    return
  }

  const time = log.hrtime()

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

  formatLog(req, res, { time, type: '302' })
}

export default handler
