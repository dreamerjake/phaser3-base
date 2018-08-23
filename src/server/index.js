const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./models/User')
require('./services/passport')

// Database Setup
mongoose.connect(keys.mongoURI)
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//   // successful connection to mongodb
// })

const app = express()
app.use(express.static('dist'))
require('./routes/auth')(app)

// const PORT = process.env.PORT || 3000
const PORT = 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
