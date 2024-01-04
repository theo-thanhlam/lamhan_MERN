import Heading from "../components/header";
import Welcome from "../components/welcome";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import CustomerReview from "../components/customerReview";
import StoreInfo from "../components/storeInfo";

const IndexPage = () => {
  return (
    <>
      <Heading />
      <Welcome />
      <AboutUs />
      <Gallery />
      <CustomerReview />
      <StoreInfo />
    </>
  );
};

export default IndexPage;
