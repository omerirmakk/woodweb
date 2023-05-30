import AboutUs from "@/components/AboutUs";
import AnyQuestions from "@/components/AnyQuestions";
import Footer from "@/components/Footer";
import OurWork from "@/components/OurWork";

export default function About() {
  return (
    <>
      <div className="aboutus_main_container">
        <AboutUs />
      </div>
      <OurWork />
      <AnyQuestions />
      <Footer />
    </>
  );
}
