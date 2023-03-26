import React from 'react';
import styles from './every.module.scss';

const CardPhoto = ({ srcPhoto }) => {
  return (
    <div className={styles.cardPhoto}>
      <img src={srcPhoto} width={205} height={205}></img>
    </div>
  );
};

export default CardPhoto;
