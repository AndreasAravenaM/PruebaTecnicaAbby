const express = require("express")
const app = express()

app.set("view engine", "ejs")

const symbolsRouter = require('./api/symbols') 
const historicalRouter = require('./api/historical') 

app.use('/api/symbols', symbolsRouter)
app.use('/api/historical', historicalRouter)

app.listen(9090)