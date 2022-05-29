import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const { name, img, min_quantity, available_quantity, price, desc } = purchase;

  const handlePurchase = (e) => {
    e.preventDefault();
    const purchaseInfo = {
      name: name,
      person: user.displayName,
      email: user.email,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is booked");
      });
  };

  useEffect(() => {
    const url = `https://shielded-scrubland-74397.herokuapp.com/service/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  return (
    <section className="purchase-container ">
      <div className="max-w-screen-2xl mx-auto h-screen">
        <div className=" flex-col   md:flex-col lg:flex-row flex justify-around  items-center">
          <div>
            <div>
              <img className="rounded-lg max-h-96" src={img} alt="" />
            </div>
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
            <form
              className="w-full rounded-lg px-12 mx-auto shadow-xl"
              onSubmit={handlePurchase}
            >
              <input
                type="text"
                value={name}
                disabled
                readOnly
                className="input my-2 input-bordered text-xl font-semibold  input-md w-full px-4"
              />
              <input
                type="text"
                value={user.displayName}
                disabled
                readOnly
                className="input my-2 input-bordered text-xl  input-md w-full px-4"
              />
              <input
                type="text"
                value={user.email}
                disabled
                readOnly
                placeholder="Type here"
                className="input my-2 input-bordered text-xl  input-md w-full px-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone number"
                autoComplete="off"
                className="input my-2 input-bordered text-xl  input-md w-full px-4"
              />
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                autoComplete="off"
                className="input my-2 input-bordered text-xl  input-md w-full px-4"
              />

              <input
                type="submit"
                value="ORDER NOW"
                className="border-2 rounded-md hover:bg-slate-700 cursor-pointer text-white p-2 w-[50%] font-bold mx-auto block my-2 "
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
