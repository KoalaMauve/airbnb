const express = require('express')
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
const client = require("./db")
const port = 3000
//Fichier contenant les routes pour mes requétes
const citiesRoutes = require('./api/app.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

client.connect().then(() => console.log("Connected to Mongo!"));

app.use("/api", citiesRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})