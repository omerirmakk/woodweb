import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import axios from 'axios';

const gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch('https://restcountries.com/v3.1/all')
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((err) => console.log(err));
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setData(response.data));
  }, []);
  console.log(data);
  return (
    <Layout>
      <List data={data}>gallery</List>
    </Layout>
  );
};

export default gallery;
