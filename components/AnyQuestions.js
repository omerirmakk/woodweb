import Image from "next/image";
import Button from "./Button";
import styles from "./every.module.scss";
export default function AnyQuestions() {
  return (
    <>
      <div className={styles.anyquestions_container}>
        <h1>ANY QUESTIONS?</h1>
        <div>
          <div>
            <form>
              <input type="text" placeholder="Your name"></input>
              <input type="text" placeholder="Your telephone number"></input>
              <input type="text" placeholder="Your question"></input>
              <Button type="submit">Send</Button>
            </form>
          </div>
          <div>
            <p>
              Write to us and we will be sure to answer all your questions and
              give you a comprehensive consultation.
            </p>
            <Image
              alt="woodphoto"
              src="/basewood.png"
              width={480}
              height={480}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
