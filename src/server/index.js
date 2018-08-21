const express = require('express')
const mongoose = require('mongoose')

// Database Setup
// noinspection JSIgnoredPromiseFromCall
mongoose.connect('mongodb://mongo:27017/')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // successful connection to mongodb
})

const app = express()

app.use(express.static('dist'))

app.get('/test', (req, res) => {
  res.send({test: 'success'})
})

app.listen(3000, () => console.log('Listening on port 3000'))
