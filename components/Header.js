import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './every.module.scss';
import { useRef, useEffect } from 'react';

const Header = () => {
  // const myRef = useRef(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  let interval = null;

  useEffect(() => {
    const wordElement = document.querySelectorAll('.words');

    for (let i = 0; i < wordElement.length; i++)
      wordElement[i].onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 10);
      };
  }, []);

  return (
    <>
      <div className={styles.nav_flex}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/Logo.png"
            width={197}
            height={84}
          />
        </Link>
        <div>
          <li>
            <Link href="./gallery" data-value="Gallery" className="words">
              Gallery
            </Link>
            <Link
              href="./price"
              className="words"
              data-value="Prices for services"
            >
              Prices for services
            </Link>
            <Link href="./about" className="words" data-value="About us">
              About us
            </Link>
            <Link href="./contact" className="words" data-value="Contact">
              Contact
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
