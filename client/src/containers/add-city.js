import React, { useEffect, useState } from 'react';
import { getAllCities } from '../App';
const axios = require('axios')
const url = 'http://localhost:9090/api/cities/'

function AddCity(props) {

    async function post() {
        let city = document.querySelector('.input').value
        let res = await axios.post(url, { name: city })
        console.log(res.data)
        getAllCities()
    }
    return (
        <>
            <div>
                <button onClick={post}>+</button>
            </div>
        </>
    )
}
export default AddCity;