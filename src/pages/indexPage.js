import Welcome from "../components/Welcome";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import CustomerReview from "../components/CustomerReview";
import StoreInfo from "../components/StoreInfo";

const IndexPage = () => {
  return (
    <main>
      <div style={{marginTop: "100px"}}>
        <Welcome />
        <AboutUs />
        <Gallery />
        <CustomerReview />
        <StoreInfo />
      </div>
    </main>
  );
};

export default IndexPage;
