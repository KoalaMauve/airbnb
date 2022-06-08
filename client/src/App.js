import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import ModifListe from './containers/Modif_Liste';

export default function App() {
  const [ListeVilles, setListeVilles] = useState([]);
  const [Temps, setTemps] = useState([]);
  const [Degres, setDegres] = useState([]);

  useEffect(() => {
    // faire une requete avec axios.get
    // sur le point d'API de Gabriel
    setListeVilles([
      "Annecy",
      "Paris",
      "Bordeaux"
    ])
    setTemps([
      "Nuageux",
      "Ensoleillé",
      "Pluie"
    ])
    setDegres([
      "12°C",
      "16°C",
      "27°C"
    ])
  }, [])
  return (
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