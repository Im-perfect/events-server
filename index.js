const express = require('express')
const app = express()
const eventRouter = require('./event/router')


app.use(eventRouter)

app.listen(4000, ()=>console.log('listening on 4000'))