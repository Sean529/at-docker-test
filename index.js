const http = require('node:http')
const fsp = require('node:fs/promises')
const fs = require('node:fs')

const server = http.createServer(async (req, res) => {
  const stat = await fsp.stat('./index.html')
  res.setHeader('content-length', stat.size)
  fs.createReadStream('./index.html').pipe(res)
})


server.listen(3001, () => {
  console.log('http://localhost:3001')
})
