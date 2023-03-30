import React from "react";
import styles from "./every.module.scss";
import Button from "./Button";
import Image from "next/image";

const HomeTable = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <div className={styles.homeTable_left_side}>
          <h1 className={styles.title_transparent}>
            SOLID <br></br> WOOD <br></br> PRODUCTS
          </h1>

          <p className="parag">
            Oak, beech, ash from <br></br> <strong>480 EURO </strong> per m
            <sup>3</sup>
          </p>
          <Button className={`${styles.btnHome} btn`}>Order</Button>
        </div>
        <hr className="homeTable-hr"></hr>
        <div className={styles.homeTable_right_side}>
          <div className="right-side-container">
            <Image width={205} height={205} src="/home3.png"></Image>
            <Image width={205} height={205} src="/home2.png"></Image>
            <Image width={205} height={205} src="/home1.png"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTable;
