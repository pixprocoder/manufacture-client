import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../../App.css";
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
      price: price,
      img: img,
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
    const url = `http://localhost:5000/service/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  return (
    <section className="container">
      <div className="purchase-container lg:grid ">
        <div className="product-header ">
          <h1 className="py-8 text-3xl text-orange-600 font-semibold text-center">
            {name}
          </h1>
        </div>
        <div className="product-img">
          {" "}
          <img className="rounded-lg max-h-96" src={img} alt="" />
        </div>
        {/* ===========================
        Form
      ===========================*/}
        <form
          className="product-form w-full rounded-lg px-12 mx-auto shadow-xl flex flex-col justify-center "
          onSubmit={handlePurchase}
        >
          <h1 className="mb-2">Please Fill the Form</h1>
        
          <div className="flex justify-between mb-2 gap-2">
          <input
            type="text"
            value={user.displayName || user.name}
            disabled
            readOnly
            className="input input-bordered w-full  text-white rounded-md"
          /> 
          <input
            type="text"
            value={user.email}
            disabled
            readOnly
            placeholder="Type here"
            className="input input-bordered w-full  text-white rounded-md"
          />
          </div>
          <input
            type="text"
            name="phone"
            required
            placeholder="Enter Phone number"
            autoComplete="off"
            className="input input-bordered w-full mb-2 text-white rounded-md"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            required
            autoComplete="off"
            className=" input input-bordered w-full text-white rounded-md"
          />

          <button
            type="submit"
            className=" my-2 w-full btn btn-primary text-xl rounded-md"
          >Confirm Order</button>
        </form>

        {/* ===================
        Product details
        =============== */}

        <div className="product-description w-full lg:w-3/6 mx-auto  rounded-lg shadow-2xl px-6 py-2 mb-10">
          <h1 className="text-center text-2xl py-3">Product info</h1>
          <div className="">
            <p>
              Minimum Quantity: <span className=" px-4 ">{min_quantity}</span>
            </p>
            <p>
              Available Quantity:{" "}
              <span className=" px-4 ">{available_quantity}</span>
            </p>
            <p>Price: {price}</p>

            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
