import React from 'react';
import Header from './Header';
import styles from './every.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout_container}>
        <div className={styles.navbar}>
          <Header />
        </div>

        <div className={styles.main_countainer}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
