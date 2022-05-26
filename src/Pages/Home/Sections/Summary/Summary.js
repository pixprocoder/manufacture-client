import React from "react";
import img1 from "../../../../images/bussnessIcon/consultants-g93e42d652_640.jpg";
import img2 from "../../../../images/bussnessIcon/country.png";
import img3 from "../../../../images/bussnessIcon/project.png";
import img4 from "../../../../images/bussnessIcon/feedback.png";
const Summary = () => {
  return (
    <section
      style={{ backgroundColor: "rgb(13 11 46)" }}
      className="flex flex-col justify-center items-center py-24"
    >
      <h1 className="text-5xl text-center mb-16 text-white uppercase">
        Business Summary
      </h1>
      <div className="summary-container max-w-screen-2xl mx-auto py-20 ">
        <div className=" bg-transparent grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="stat flex flex-col justify-center items-center ">
            <div className="avatar ">
              <div className="w-32 rounded-full">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="mt-6">
              <p className="stat-value text-primary text-5xl text-center">
                550+
              </p>
              <p className="text-2xl text-white ">Complete projects</p>
            </div>
          </div>

          <div className="stat flex flex-col justify-center items-center ">
            <div className="avatar ">
              <div className="w-32 rounded-full">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="mt-6">
              <p className="stat-value text-primary text-5xl text-center">99</p>
              <p className="text-2xl text-white ">Countries</p>
            </div>
          </div>

          <div className="stat flex flex-col justify-center items-center ">
            <div className="avatar ">
              <div className="w-32 rounded-full">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="mt-6">
              <p className="stat-value text-primary text-5xl text-center">
                355+
              </p>
              <p className="text-2xl text-white ">Happy clients</p>
            </div>
          </div>

          <div className="stat flex flex-col justify-center items-center ">
            <div className="avatar ">
              <div className="w-32 rounded-full">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="mt-6">
              <p className="stat-value text-primary text-5xl text-center">
                1052+
              </p>
              <p className="text-2xl text-white ">Feedbacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
