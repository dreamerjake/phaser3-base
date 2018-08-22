const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

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

passport.use(new GoogleStrategy())

// const PORT = process.env.PORT || 3000
const PORT = 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
