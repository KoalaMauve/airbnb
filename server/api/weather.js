const express = require('express')
var router = express.Router()
const client = require('../db')
const uuid = require('uuid');
const axios = require('axios')

const collectionName = process.env.COLLECTION;
const url = 'http://api.openweathermap.org/data/2.5/';
const key = process.env.OPENWEATHERKEY;

weather = (async (city, key) => {
    let weather = await axios.get(url + 'forecast?=' + /*city*/ + '&appid=' + key)
    res.send(cities);
})

module.exports = weather;