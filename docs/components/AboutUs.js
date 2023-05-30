import Image from "next/image";
import styles from "./every.module.scss";
export default function AboutUs() {
  return (
    <>
      <div className={styles.aboutus_container}>
        <div>
          <h1>ABOUT US</h1>
          <p>
            <strong>BIO CWT</strong> - We manufacture solid wood products
            according to individual drawings. We make chairs, armchairs,
            wardrobes, beds and much more in our own workshop, equipped with all
            the necessary industrial equipment.
          </p>
        </div>
        <div>
          <Image
            alt="woodphoto"
            width={205}
            height={205}
            src="/marangoz.png"
          ></Image>
          <Image
            alt="woodphoto"
            width={350}
            height={350}
            src="/portre-wood.png"
          ></Image>
          <Image
            alt="woodphoto"
            width={205}
            height={205}
            src="/person-wood.png"
          ></Image>
        </div>
      </div>
    </>
  );
}
