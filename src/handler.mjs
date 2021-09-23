import { lib } from '@grundstein/commons'

export const handler = (req, res) => {
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

  formatLog(req, res, { time, type: '302' })
}

export default handler
