import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import axios from 'axios';

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
    </div >
  )
}