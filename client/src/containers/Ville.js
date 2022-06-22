import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Ville(props) {
    console.log(props.city)
    const [Temps, setTemps] = useState(null);

    useEffect(() => {
        //async function + requête axios.get sur API pour avoir la météo par ville
        async function getWeather() {
            var response = await axios.get('http://localhost:9090/api/weather/' + props.city.name)
            setTemps(response.data)
        }
        getWeather()
    }, [])
    return (
        <border>
            <center>{props.city.name}</center>
            {Temps && (
                Temps.list.map((item) => {
                    return (
                        <div>
                            {item.main.temp}
                            {item.dt_txt}
                            {item.main.temp_max}
                            {item.main.temp_min}
                            {item.main.feels_like}
                            {item.main.humidity}
                        </div>
                    )
                }
                )
            )
            }
        </border >
    )

}
export default Ville;
