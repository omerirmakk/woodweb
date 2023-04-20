import AnyQuestions from "@/components/AnyQuestions";
import Footer from "@/components/Footer";
import PriceList from "@/components/PriceList";

const Price = () => {
  return (
    <>
      <div style={{ marginTop: "20%" }}>
        <PriceList />
        <AnyQuestions />
        <Footer />
      </div>
    </>
  );
};

export default Price;
