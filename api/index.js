const fetch = require('node-fetch')

module.exports = (req, res) => {
  fetch(`https://disqus.com${req.url}`)
    .then(r => r.json())
    .then(d => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60, stale-while-revalidate')
      res.status(200).json(d)
    })
}