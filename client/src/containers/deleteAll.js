import React, { useEffect, useState } from 'react';
import { getAllCities } from '../App';
const axios = require('axios')

function DeleteAll(props) {

    async function deleteAll() {
        axios.delete('http://localhost:9090/api/cities/all')
        props.updateCities()
    }
    return (
        <>
            <div>
                <button onClick={deleteAll}>DeleteAll</button>
            </div>
        </>
    )
}
export default DeleteAll;