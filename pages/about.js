import Layout from '@/components/Layout';
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

  return (
    <Layout>
      <div className="country_container">
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
      </div>
    </Layout>
  );
};

export default about;
