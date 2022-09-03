const express = require("express")
const router = express.Router()
const fs = require('fs')
const list = JSON.parse(fs.readFileSync('./json/historical.json', 'utf-8'))

router.get('/', (req, res) => {

    res.render('historical.ejs', {list: list.historicalStockList, find: null})

})

router
    .route('/:symbol')
    .get((req, res) =>{

        res.render('historical.ejs', {list: list.historicalStockList, find: req.params.symbol})

})

module.exports = router