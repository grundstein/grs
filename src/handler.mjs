import { lib, log } from '@grundstein/commons'

export const handler = (req, res) => {
  const time = log.hrtime()

  req = lib.enhanceRequest(req)

  let hostname = lib.getHostname(req)

  // strip www from the domain
  if (hostname.startsWith('www.')) {
    hostname = hostname.replace('www.', '')
  }

  res.writeHead(302, {
    Location: `https://${hostname}${req.url}`,
  })

  res.end()

  log.server.request(req, res, { time, type: 'http redirect' })
}

export default handler
