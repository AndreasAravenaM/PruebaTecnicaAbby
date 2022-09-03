const express = require("express")
const router = express.Router()
const fs = require('fs')
const list = JSON.parse(fs.readFileSync('./json/symbols.json', 'utf-8'))

router.get('/', (req, res) => {

    res.render('symbols.ejs', {list: list.symbolsList, find: null})

})

router
    .route('/:symbol')
    .get((req, res) =>{

        res.render('symbols.ejs', {list: list.symbolsList, find: req.params.symbol})

})

module.exports = router