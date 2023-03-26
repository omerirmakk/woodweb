import React from 'react';
import styles from './every.module.scss';
import Button from './Button';
import CardPhoto from './CardPhoto';
import Image from 'next/image';

const HomeTable = () => {
  return (
    <>
      <div className={styles.containerHome}>
        <div className={styles.homeTable_left_side}>
          <h1>
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
          <CardPhoto
            srcPhoto="/home1.png"
            className={styles.cardPhotos}
          ></CardPhoto>
          <CardPhoto srcPhoto="/home2.png" className={styles.card}></CardPhoto>
          <CardPhoto
            srcPhoto="/home3.png"
            className={styles.cardPhotos}
          ></CardPhoto>
        </div>
      </div>
    </>
  );
};

export default HomeTable;
