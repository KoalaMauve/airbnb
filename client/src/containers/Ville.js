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
                            <center>
                                <div class="temp">
                                    {item.main.temp}
                                </div>
                                <div class="date">
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
                                </div>
                            </center>
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
