import axios from 'axios';
import React, { useEffect, useState } from 'react';

const about = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    //fetch('https://restcountries.com/v3.1/all')
    //  .then((response) => response.json())
    // .then((response) => setCountries(response));
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);
  console.log('Data', countries);
  const Link = require('./node_modules/next/Link.js');
  console.log(Link);

  return (
    <>
      {countries.map((country) => {
        return (
          <div className="country">
            <h2>{country.name.common}</h2>
            <h4>{country.name.common}</h4>
            <p>
              <img src={country.flags.png}></img>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default about;
