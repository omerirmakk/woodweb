import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./every.module.scss";

export default function PriceList() {
  return (
    <>
      <h1
        style={{ textAlign: "left", marginLeft: "5rem", marginBottom: "7rem" }}
      >
        PRICE LIST
      </h1>
      <div className={styles.priceList_container}>
        <Carousel>
          <Image
            width={250}
            height={650}
            className="fotoo"
            alt="foto"
            src="/Group-30.png"
          ></Image>
          <Image
            alt="foto2"
            width={250}
            height={650}
            src="/Group-33.png"
          ></Image>
          <Image
            alt="foto3"
            width={250}
            height={650}
            src="/Group-36.png"
          ></Image>
        </Carousel>
      </div>
    </>
  );
}
