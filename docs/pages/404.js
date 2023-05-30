import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <>
      <title>404</title>
      <div className="notfound">
        <Image className="error_svg" src="/404.png" width={1096} height={548} />
        <h1 className="error_title">Woops</h1>
        <p className="error_parag">
          Oh, you must be lost, there is no such a page.
        </p>
        <Link href="./" passHref={true}>
          <Button className="btn error_btn"> Go to the home page</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
