import Image from "next/image";
import Button from "./Button";
import styles from "./every.module.scss";
export default function AdvantagesOfWork() {
  return (
    <>
      <div className={styles.advantages_container}>
        <h1>ADVANTAGES of WORKING WITH US</h1>
        <div>
          <Image
            alt="woodphoto"
            src="/video.png"
            width={600}
            height={370}
          ></Image>
          <div>
            <p>In-house carpentry production</p>
            <p>
              We only treat wood with environmentally friendly and safe products
            </p>
            <p>Prices from the manufacturer, no extra charges</p>
          </div>
        </div>
        <Button>Receive a consultation</Button>
      </div>
    </>
  );
}
