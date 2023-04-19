import React from "react";
import styles from "./every.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <Image
            alt="woodphoto"
            src="/Logo.png"
            width={197}
            height={84}
          ></Image>
        </div>
        <div className={styles.footer_tel}>Tel</div>
        <div className={styles.footer_location}>Location</div>
      </div>
    </>
  );
};

export default Footer;
