import React from "react";

const Banner = () => {
  return (
    <div class="banner-container h-screen text-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/BT0WNX2/fashion-g4c32f53c1-640.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
