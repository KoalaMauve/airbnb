import './App.css';
import React, { useEffect, useState } from 'react';
import Ville from './containers/Ville';
import ModifListe from './containers/Modif_Liste';

export default function App() {
  const [listev, setlistev] = useState([]);
  return (
    <div>
      <><Ville listev={listev}></Ville><ModifListe></ModifListe></>
    </div>
  )
}
