import AnyQuestions from "@/components/AnyQuestions";
import Footer from "@/components/Footer";
import OurWork from "@/components/OurWork";
import WoodQuality from "@/components/WoodQuality";

const Gallery = () => {
  return (
    <>
      <OurWork />
      <div className="gallery_wood_container">
        <WoodQuality />
      </div>
      <div className="gallery_anyquestion_container">
        <AnyQuestions />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
