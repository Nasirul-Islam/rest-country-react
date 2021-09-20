import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])
    return (
        <div>
            <h1>All Countrys : {countrys.length}</h1>
            <div className="country-container">
                {
                    countrys.map(country => <Country
                        key={country.name}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;