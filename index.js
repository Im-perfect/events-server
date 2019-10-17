const express = require('express')
const app = express()

const eventRouter = require('./event/router')

const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParser = require('body-parser')
const bodyParserMiddleware = bodyParser.json()
app.use(bodyParserMiddleware)

app.use(eventRouter)

app.listen(process.env.PORT || 4000, ()=>console.log('listening on 4000'))