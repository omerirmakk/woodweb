import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://shibe.online/api/shibes?count=95&urls=true&httpsUrls=true')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <div data={data}>gallery</div>
    </Layout>
  );
};

export default gallery;
