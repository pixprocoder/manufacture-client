import React from "react";
import Banner from "./Banner";
import "../../Styles/Style.css";
import Parts from "./Sections/Parts/Parts";
import Summary from "./Sections/Summary/Summary";
import Review from "./Sections/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      {/* <Summary /> */}
      {/* <Review /> */}
    </div>
  );
};

export default Home;
