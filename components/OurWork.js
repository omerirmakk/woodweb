import { useEffect, useState } from "react";
import Image from "next/image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import styles from "./every.module.scss";
export default function OurWork() {
  {
    /*
 const [imageIndex, setImageIndex] = useState([0]);
 
 useEffect(() => {
   const arrowLeft = document.querySelector(".arrowLeft");
    const arrowRight = document.querySelector(".arrowRight");
    const kitchenImages = document.querySelectorAll(".kitchen");

    for (let i = 0; kitchenImages.length; i++) {}
  }, []);
*/
  }
  return (
    <>
      <div className={styles.ourWork}>
        <h1>Our Work</h1>
        <div className={styles.ourWork__Image}>
          <BiArrowBack style={{ cursor: "pointer" }} class="arrowLeft" />
          <Image
            width={800}
            height={550}
            className="kitchen"
            alt="foto"
            src="/kitchen.jpg"
          ></Image>
          <Image
            alt="foto"
            width={800}
            height={550}
            className="kitchen"
            src="/kitchen2.jpg"
          ></Image>
          <Image
            alt="foto"
            width={800}
            height={550}
            className="kitchen"
            src="/kitchen3.jpg"
          ></Image>
          <BiRightArrowAlt class="arrowRight" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </>
  );
}
