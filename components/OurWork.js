import { useEffect, useState } from "react";
import Image from "next/image";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import styles from "./every.module.scss";
export default function OurWork() {
  const [imageIndex, setImageIndex] = useState([0]);

  useEffect(() => {
    const arrowLeft = document.querySelector(".arrowLeft");
    const arrowRight = document.querySelector(".arrowRight");
    const kitchenImages = document.querySelectorAll(".kitchen");
    for (let i = 0; kitchenImages.length; i++) setImageIndex(kitchenImages[i]);
    console.log(setImageIndex);
    /*  if (setImageIndex[i] === 0) {
      kitchenImages[1].style.display = "block";
    } else {
      kitchenImages[2].style.display = "none";
    }*/
  }, []);

  return (
    <>
      <div className={styles.ourWork}>
        <h1>Our Work</h1>
        <div className={styles.ourWork__Image}>
          <BiArrowBack style={{ cursor: "pointer" }} className="arrowLeft" />
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
          <BiRightArrowAlt
            className="arrowRight"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}
