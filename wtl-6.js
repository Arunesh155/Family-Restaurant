const express = require('express');
const app = express()
const routing = require('./route')
app.use('/', routing)
app.listen(8888)
console.log("running...")