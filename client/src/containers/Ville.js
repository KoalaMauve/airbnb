import './Ville.css';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Ville(props) {
    const [Temps, setTemps] = useState(null);

    useEffect(() => {
        //async function + requête axios.get sur API pour avoir la météo par ville
        async function getWeather() {
            var response = await axios.get('http://localhost:9090/api/weather/' + props.city.name)
            setTemps(response.data)
            console.log(response.data)
        }
        getWeather()
    }, [])

    function toggleHidden(id) {
        document.getElementById(id).classList.toggle('hidden')
    }

    async function deleteCity() {
        axios.delete('http://localhost:9090/api/cities/' + props.city._id)
        props.updateCities()
    }

    return (
        <div className='details-container'>
            <div className='header'>
                <center>
                    <div className='city' onClick={() => { toggleHidden(props.city._id) }}>
                        {props.city.name}
                    </div>
                    <button onClick={() => { deleteCity() }}>X</button>
                </center>
            </div>
            <div className={'temp-container'} id={props.city._id}>
                {Temps && (
                    Temps.list.map((item, index) => {
                        var date = new Date
                        var hoursLefts = 24 - date.getHours()
                        if (index <= hoursLefts) {
                            return (
                                <div>
                                    <div class="temp">
                                        {(index + date.getHours() != 24 ? index + date.getHours() : '0') + 'h'} : {item.main.temp}
                                    </div>
                                    {/* <div class="date">
                                        {item.dt_txt}
                                    </div>
                                    <div class="t_max">
                                        {item.main.temp_max}
                                    </div>
                                    <div class="t_min">
                                        {item.main.temp_min}
                                    </div>
                                    <div class="feels">
                                        {item.main.feels_like}
                                    </div>
                                    <div class="humidity">
                                        {item.main.humidity}
                                    </div> */}
                                </div>
                            )
                        }
                        else return null
                    }
                    )
                )
                }
            </div>
        </div>
    )

}
export default Ville;
