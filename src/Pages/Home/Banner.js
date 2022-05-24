import React from "react";

const Banner = () => {
  return (
    <div class="banner-container h-screen">
      <div class="text-center mb-[100px]">
        <div>
          <h1 class="text-5xl font-bold">START YOUR BUSINESS</h1>
          <p class="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque <br /> aut
            repudiandae et a id nisi. yes you can do this.
          </p>

          <button class="btn btn-outline rounded-3xl">
            {" "}
            START YOUR JOURNEY
          </button>
        </div>
      </div>
      <h1 className="text-5xl absolute bottom-0 my-6"> Available Parts</h1>
    </div>
  );
};

export default Banner;
