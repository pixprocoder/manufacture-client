import React from "react";

const Banner = () => {
  return (
    <div className="banner-container h-screen">
      <div className="text-center ">
        <div>
          <h1 className="text-5xl font-bold">START YOUR BUSINESS WITH US</h1>
          <p className="py-6 ">
            hello there, Welcome to our website. We are looking for you!
          </p>

          <button className="px-8 py-2 rounded-3xl bg-orange-600 hover:bg-orange-800 text-xl text-white font-bold ">
            {" "}
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
