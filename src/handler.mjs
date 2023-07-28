import { lib } from '@grundstein/commons'

export const handler = (req, res) => {
  /*
   * lib.getHostname supports http1 and http2
   */
  let hostname = lib.getHostname(req)

  // strip www from the domain
  if (hostname.startsWith('www.')) {
    hostname = hostname.slice(4)
  }

  const head = {
    // [HTTP2_HEADER_STATUS]: 302,
    Location: `https://${hostname}${req.url}`,
  }

  res.writeHead(302, head)

  res.end()
}

export default handler
