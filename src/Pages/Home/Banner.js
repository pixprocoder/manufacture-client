import React from "react";

const Banner = () => {
  return (
    <div className="banner-container h-screen">
      <div className="text-center ">
        <div>
          <h1 className="text-5xl font-bold">START YOUR BUSINESS</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque <br /> aut
            repudiandae et a id nisi. yes you can do this.
          </p>

          <button className="px-8 py-2 rounded-3xl bg-orange-600 hover:bg-orange-800 text-xl text-white font-bold ">
            {" "}
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
