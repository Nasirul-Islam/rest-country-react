import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { name, capital, population, flag } = props.country
    return (
        <div className="country">
            <img width="200px" src={flag} alt="" />
            <h3>Country : {name}</h3>
            <p>capital : {capital}, population: {population}</p>
        </div>
    );
};

export default Country;