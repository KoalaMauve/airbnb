import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import axios from 'axios';
import CityField from './containers/city-field';
import AddCity from './containers/add-city';

const citiesUrl = 'http://localhost:9090/api/cities/'

export default function App() {
  //Définition des variables
  const [ListeVilles, setListeVilles] = useState([]);

  useEffect(() => {
    //async function + requête axios.get sur API pour avoir la liste des villes

    getCities()
  }, [])

  async function getCities() {
    var response = await axios.get('http://localhost:9090/api/cities')
    setListeVilles(response.data)
    console.log('data', response.data)
  }

  return (
    <div>
      <div>Add a new city to ur dashboard</div>
      <div className='newCity'><AddCity updateCities={getCities}></AddCity><CityField></CityField></div>
      {
        ListeVilles.map((ville) => {
          return <Ville className={ville._id} city={ville} updateCities={getCities}></Ville>
        })
      }
    </div >
  )
}