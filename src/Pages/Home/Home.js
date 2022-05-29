import React from "react";
import Banner from "./Banner";
import "../../Styles/Style.css";
import Parts from "../Home/Sections/Parts/Parts";
import Summary from "./Sections/Summary/Summary";
import Review from "./Sections/Review/Review";
import Footer from "../Shared/Footer";
const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Summary />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
