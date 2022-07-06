import React, { useEffect, useState } from 'react';
import { getAllCities } from '../App';
const axios = require('axios')
const url = 'http://localhost:9090/api/cities/'

function DeleteAll(props) {

    async function deleteAll() {
        let city = document.querySelector('.input').value
        let res = await axios.post(url, { name: city })
        props.updateCities()
    }
    return (
        <>
            <div>
                <button onClick={deleteAll}>+</button>
            </div>
        </>
    )
}
export default DeleteAll;