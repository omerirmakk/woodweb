import React from "react";

import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <title>500</title>
      <div className="notfound">
        <h1 className="error_title">Woops</h1>
        <p className="error_parag">
          Oh, you must be lost, there is no such page.
        </p>
      </div>
      <Link href="./" passHref={true}>
        <Button className="btn error_btn"> Go to the home page</Button>
      </Link>
    </>
  );
};

export default NotFound;