import React from "react";
import Banner from "./Banner";
import "../../Styles/Style.css";
import Parts from "../Home/Sections/Parts/Parts";
import Summary from "./Sections/Summary/Summary";
const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Summary />
    </div>
  );
};

export default Home;
