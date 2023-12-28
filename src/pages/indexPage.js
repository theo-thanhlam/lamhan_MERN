import Welcome from "../components/welcome";
import Heading from "../components/heading";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import CustomerReview from "../components/customerReview";
import StoreInfo from "../components/storeInfo";
const IndexPage = () => {
  return (
    <>
      <Welcome />
      <AboutUs />
      <Gallery />
      <CustomerReview />
      <StoreInfo />
    </>
  );
};

export default IndexPage;
