const express = require('express')
var router = express.Router()
const client = require('../db')
const uuid = require('uuid');
const axios = require('axios')
const utils = require('./utils')

const collectionName = process.env.COLLECTION;
const url = 'http://api.openweathermap.org/data/2.5/forecast';
const key = process.env.OPENWEATHERKEY;

router.get('/:city', async (req, res) => {
    console.log("get weather for", req.params.city)
    console.log(key)
    let weather = await axios.get(url, { params: { 'q': req.params.city, 'appid': key } })
    res.send(weather.data.list[0])
})

module.exports = router;