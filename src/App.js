import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountrys></LoadCountrys>
    </div>
  );
}

function LoadCountrys() {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountrys(data))
  }, [])
  return (
    <div>
      <h1>Traveling Around the World!!!</h1>
      <h2>Countrys Available : {countrys.length}</h2>
    </div>
  );
}



export default App;
