import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import ModifListe from './containers/Modif_Liste';

export default function App() {
  const [listeVilles, setListeVilles] = useState([]);
  const [ville, setville] = useState([])

  useEffect(() => {
    // faire une requete avec axios.get
    // sur le point d'API de Gabriel
    setListeVilles([
      "Annecy",
      "Paris",
      "Bordeaux"
    ])
  }, [])
  return (
    <div>
      {
        listeVilles.map((ville) => {
          return <Ville city={ville}></Ville>
        })
      }
      < ModifListe listeVilles={listeVilles}></ModifListe>
    </div >
  )
}