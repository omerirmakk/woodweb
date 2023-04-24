import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./every.module.scss";

export default function OurWork() {
  return (
    <>
      <div className={styles.ourWork}>
        <h1>Our Work</h1>
        <div className={styles.ourWork__Image}>
          <Carousel showThumbs={false} className="carousel">
            <Image
              width={800}
              height={550}
              className="kitchen"
              alt="foto"
              src="/kitchen.jpg"
            ></Image>
            <Image
              alt="foto2"
              width={800}
              height={550}
              className="kitchen"
              src="/kitchen1.jpg"
            ></Image>
            <Image
              alt="foto3"
              width={800}
              height={550}
              className="kitchen"
              src="/kitchen2.jpg"
            ></Image>
          </Carousel>
        </div>
      </div>
    </>
  );
}
