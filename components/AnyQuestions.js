import Button from "./Button";
import Image from "next/image";
export default function AnyQuestions() {
  return (
    <>
      <h1>ANY QUESTIONS?</h1>
      <div>
        <div>
          <form>
            <input type="text" placeholder="Your name"></input>
            <input type="number" placeholder="Your telephone number"></input>
            <input type="text" placeholder="Your question"></input>
            <Button type="submit">Send</Button>
          </form>
        </div>
        <div>
          <p>Write lorem ipsum asdasdasdasd</p>
          <Image></Image>
        </div>
      </div>
    </>
  );
}
