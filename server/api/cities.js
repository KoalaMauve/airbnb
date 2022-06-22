const express = require('express')
var router = express.Router()
const client = require('../db')
const uuid = require('uuid');
const axios = require('axios')

const collectionName = process.env.COLLECTION;

//Get all cities
router.get('/cities', async (req, res) => {
    let cities = await client.db().collection(collectionName).find().toArray()
    res.send(cities);
})

//Get city by id
router.get('/cities/:id', async (req, res) => {
    console.log("get on", req.params.id)
    let getCities = await client.db().collection(collectionName).find({ "_id": req.params.id }).toArray()
    res.send(getCities);
})

//Post a city
router.post('/cities', async (req, res) => {
    const { name } = req.body

    let insert = await client.db().collection(collectionName).insertOne(
        {
            "_id": uuid.v4(), "name": name
        }
    )
    console.log(insert)
    res.send(JSON.stringify(insert))

})

//Edit a city by id
router.put('/cities/:id', async (req, res) => {
    const { name } = req.body
    console.log(req.params.id)
    console.log(typeof (req.params.id))

    let updateCity = await client.db().collection(collectionName).updateOne(
        {
            "_id": req.params.id
        },
        {
            $set: {
                "name": name
            }
        }
    )
    console.log(updateCity)
    res.send(JSON.stringify(updateCity))

})

//Delete all cities
router.delete('/cities/all', async (req, res) => {
    console.log("delete all")
    let deleteAll = await client.db().collection(collectionName).remove()
    res.send(deleteAll);
})

//Delete city by id
router.delete('/cities/:id', async (req, res) => {
    console.log("delete on", req.params.id)
    let deleteCity = await client.db().collection(collectionName).deleteOne({ "_id": req.params.id })
    res.send(deleteCity);
})

module.exports = router;