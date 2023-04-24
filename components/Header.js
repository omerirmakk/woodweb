import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./every.module.scss";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  let interval = null;
  useEffect(() => {
    const wordElement = document.querySelectorAll(".words");

    for (let i = 0; i < wordElement.length; i++)
      wordElement[i].onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 10);
      };
  }, []);

  return (
    <>
      <div
        className={
          currentRoute === "/" ? styles.nav_flex : styles.nav_flex_active
        }
      >
        <Link href="/">
          <Image
            className={styles.logo}
            src="/Logo.png"
            width={197}
            height={84}
            alt="woodphoto"
          />
        </Link>

        <div>
          <li>
            <Link
              href="./gallery"
              data-value="Gallery"
              class="words"
              className={currentRoute === "/gallery" ? styles.active : ""}
            >
              Gallery
            </Link>

            <Link
              href="./price"
              class="words"
              className={currentRoute === "/price" ? styles.active : ""}
              data-value="Prices for services"
            >
              Prices for services
            </Link>
            <Link
              href="./about"
              class="words"
              className={currentRoute === "/about" ? styles.active : ""}
              data-value="About us"
            >
              About us
            </Link>
            <Link
              href="./contact"
              class="words"
              className={currentRoute === "/contact" ? styles.active : ""}
              data-value="Contact"
            >
              Contact
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
