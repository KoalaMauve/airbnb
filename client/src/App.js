import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import ModifListe from './containers/Modif_Liste';
import axios from 'axios';

export default function App() {
  //Définition des variables
  const [ListeVilles, setListeVilles] = useState([]);
  const [Temps, setTemps] = useState([]);
  const [Degres, setDegres] = useState([]);

  useEffect(() => {
    //async function + requête axios.get sur API pour avoir la météo
    async function getWeather() {
      var response = await axios.get('https://')
      setTemps(response.data)
    }

    //MAJ liste villes
    setListeVilles([
      "Annecy",
      "Paris",
      "Bordeaux"
    ])

    //MAJ temps
    setTemps([
      "Nuageux",
      "Ensoleillé",
      "Pluie"
    ])

    //MAJ Températures
    setDegres([
      "12°C",
      "16°C",
      "27°C"
    ])
  }, [])
  return ( //
    <div>
      {
        ListeVilles.map((ville) => {
          return <Ville city={ville}></Ville>
        })
      }
      {
        Temps.map((Temps) => {
          return <Ville weather={Temps}></Ville>
        })
      }
      {
        Degres.map((Degres) => {
          return <Ville heat={Degres}></Ville>
        })
      }
      < ModifListe ListeVilles={ListeVilles}></ModifListe>
    </div >
  )
}