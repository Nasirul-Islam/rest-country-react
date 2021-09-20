import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}


/* 
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
      <Countrys></Countrys>
      {
        countrys.map(country => <Countrys name={country.name} capital={country.capital} ></Countrys>)
      }
    </div>
  );
}
function Countrys(props) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h3>Capital : {props.capital}</h3>
    </div>
  );
} */

export default App;
