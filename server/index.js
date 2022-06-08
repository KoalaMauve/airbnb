require('dotenv').config()
const express = require('express')
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
const client = require("./db")
const port = process.env.PORT

//Fichier contenant les routes pour mes requétes
const citiesRoutes = require('./api/cities.js')
const weatherRoutes = require('./api/weather.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

client.connect().then(() => console.log("Connected to Mongo!"));

app.use("/api", citiesRoutes)
app.use("/api/weather", weatherRoutes)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})