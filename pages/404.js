import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Layout>
      <title>404</title>
      <div className="notfound">
        <Image className="error_svg" src="/404.png" width={1096} height={548} />
        <h1 className="error_title">Woops</h1>
        <p className="error_parag">
          Oh, you must be lost, there is no such page.
        </p>
      </div>
      <Link href="./" passHref={true}>
        <Button className="btn error_btn"> Go to the home page</Button>
      </Link>
    </Layout>
  );
};

export default NotFound;
