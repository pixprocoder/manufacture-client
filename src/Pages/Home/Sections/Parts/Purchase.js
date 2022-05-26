import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  console.log(purchase);
  const { name, img, min_quantity, available_quantity, price, desc } = purchase;

  useEffect(() => {
    const url = `http://localhost:5000/service/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  return (
    <section className="purchase-container ">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="h-screen flex-col   md:flex-col lg:flex-row flex justify-around  items-center">
          <div>
            <img className="rounded-lg" src={img} alt="" />
            <div className="space-y-4">
              <h1 className="text-center text-white text-3xl my-2 uppercase">
                {" "}
                {name}
              </h1>
              <p className="text-xl text-white">
                Minimum Quantity:{" "}
                <span className="border-2 rounded-lg px-4 ">
                  {min_quantity}
                </span>
              </p>
              <p className="text-xl text-white">
                Available Quantity:{" "}
                <span className="border-2 rounded-lg px-4 ">
                  {available_quantity}
                </span>
              </p>
              <p className="text-xl text-white">Price: {price}</p>

              <p className="text-lg text-white">{desc}</p>
              <div>
                <span className="text-white mr-2 text-xl">
                  SELECT QUANTITY:
                </span>
                <input className="w-16 px-2  rounded-lg" type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-full lg:w-[50%]">
            <form>
              <div class="w-full rounded-lg px-12 mx-auto shadow-xl">
                <input
                  type="text"
                  placeholder="Type here"
                  class="input my-2 input-bordered input-md w-full px-4"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  class="input my-2 input-bordered input-md w-full px-4"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  class="input my-2 input-bordered input-md w-full px-4"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  class="input my-2 input-bordered input-md w-full px-4"
                />

                <button class="btn w-[50%] mx-auto block my-2 ">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
