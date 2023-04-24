import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import styles from "./every.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div>
          <div className={styles.footer_logo}>
            <Link href="/">
              <Image
                alt="woodphoto"
                src="/Logo.png"
                width={197}
                height={84}
              ></Image>
            </Link>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={styles.footer_tel}
          >
            <BiPhoneCall style={{ width: "40px", height: "40px" }} />
            +90 545 555 55
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className={styles.footer_location}
          >
            <CiLocationOn
              style={{
                width: "40px",
                height: "40px",
              }}
            />
            Osmanpasa cad. 34310 Avcılar/Istanbul
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
