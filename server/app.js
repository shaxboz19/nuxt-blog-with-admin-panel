const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')
const app = express()
const keys = require('./keys')

mongoose.connect(keys.MONGO_URI)
.then(()=>console.log('MONGO DB connected')).catch(()=> console.error('error',error))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


app.use('/api/auth', authRouter)

module.exports = app

