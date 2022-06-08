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
    weather.data.list[0].main.temp = utils.kelvin(weather.data.list[0].main.temp)
    weather.data.list[0].main.feels_like = utils.kelvin(weather.data.list[0].main.feels_like)
    weather.data.list[0].main.temp_min = utils.kelvin(weather.data.list[0].main.temp_min)
    weather.data.list[0].main.temp_max = utils.kelvin(weather.data.list[0].main.temp_max)
    res.send(weather.data.list[0])
})

module.exports = router;