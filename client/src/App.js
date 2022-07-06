import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import axios from 'axios';
import CityField from './containers/city-field';
import AddCity from './containers/add-city';

const citiesUrl = 'http://localhost:9090/api/cities/'

export async function getAllCities() {
  var res = await axios.get(citiesUrl)
  console.log(res.data)
  return res.data
}

export default function App() {
  //Définition des variables
  const [ListeVilles, setListeVilles] = useState([]);

  useEffect(() => {
    //async function + requête axios.get sur API pour avoir la liste des villes
    async function getCities() {
      var response = await axios.get('http://localhost:9090/api/cities')
      setListeVilles(response.data)
    }
    getCities()
  }, [])

  return (
    <div>
      {
        ListeVilles.map((ville) => {
          return <Ville city={ville}></Ville>
        })
      }
      <div className='newCity'><AddCity></AddCity><CityField></CityField></div>
      < ModifListe ListeVilles={ListeVilles}></ModifListe>
    </div >
  )
}