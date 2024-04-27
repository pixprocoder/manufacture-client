import React from "react";
import banner from "../../images/contactUs.jpg";

const Banner = () => {
  return (
    <section>
      {/* TODO:  add carousel */}
      <div >
            <img src={banner} className="d-block w-100" alt="banner1" />
          </div>
    </section>
  );
};

export default Banner;
