import React from 'react';
import Header from './Header';
import styles from './every.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.main_background}>
        <div className={styles.navbar}>
          <Header />
        </div>

        <div className={styles.second}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
