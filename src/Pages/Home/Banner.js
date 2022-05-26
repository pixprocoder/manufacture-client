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

          <button className="btn btn-outline btn-primary rounded-3xl">
            {" "}
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
