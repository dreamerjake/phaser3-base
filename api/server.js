const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  res.send({test: 'success'})
  console.log('Boop')
})

app.listen(3000, () => console.log('Listening on port 3000'))
