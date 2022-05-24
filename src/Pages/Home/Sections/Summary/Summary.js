import React from "react";
import banner from "../../../../images/summary.png";
const Summary = () => {
  return (
    <section
      style={{ background: `url(${banner})` }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl text-center mb-16 text-white uppercase">
        Business Summary
      </h1>
      <div className="summary-container max-w-screen-2xl mx-auto py-20 ">
        <div class=" bg-transparent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="stat ">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-value text-primary text-7xl">55.6K</div>
            <div class="text-3xl text-white ">Complete project</div>
          </div>

          <div class="stat ">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-value text-primary text-7xl">55.6K</div>

            <div class="text-3xl text-white ">Country</div>
          </div>
          <div class="stat ">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-value text-primary text-7xl">55.6K</div>
            <div class="text-3xl text-white ">Happy clients</div>
          </div>

          <div class="stat ">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-value text-primary text-7xl">55.6K</div>
            <div class="text-3xl text-white ">Feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
