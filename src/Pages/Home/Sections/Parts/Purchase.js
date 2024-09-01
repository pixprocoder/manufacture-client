import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../../../App.css";
import auth from "../../../../firebase.init";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  const { name, img, min_quantity, available_quantity, price, desc } = purchase;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const purchaseInfo = {
      name: name,
      person: user.displayName,
      email: user.email,
      price: price,
      img: img,
      min_qty: data.min_qty,
      available_qty: data.available_qty,
      phone: data.phone,
      address: data.address,
    };

    fetch("http://localhost:5050/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your order is booked");
        reset();
      });
  };

  useEffect(() => {
    const url = `http://localhost:5050/service/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  return (
    <section className="container mx-auto">
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
          className="product-form w-full shadow-gray-900 rounded-lg px-12 mx-auto shadow-md flex flex-col justify-center "
          onSubmit={handleSubmit(onSubmit)}
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
          <div className="flex justify-between mb-2 gap-2">
            <div className="flex flex-col">
              <input
                type="text"
                {...register("min_qty", { required: true })}
                placeholder={`Min Qty ${min_quantity}`}
                className="input input-bordered w-full  text-white rounded-md"
              />
              {errors.min_qty && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                {...register("available_qty", { required: true })}
                placeholder={`Available Qty ${available_quantity}`}
                className="input input-bordered w-full  text-white rounded-md"
              />
              {errors.available_qty && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <input
            type="text"
            name="phone"
            {...register("phone", { required: true })}
            placeholder="Enter Phone number"
            autoComplete="off"
            className="input input-bordered w-full mb-2 text-white rounded-md"
          />
          {errors.phone && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            {...register("address", { required: true })}
            autoComplete="off"
            className=" input input-bordered w-full text-white rounded-md"
          />
          {errors.address && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}

          <button
            type="submit"
            className=" my-2 w-full btn btn-primary text-xl rounded-md"
          >
            Confirm Order
          </button>
        </form>

        {/* ===================
        Product details
        =============== */}

        <div className="card shadow-gray-900 product-description w-full lg:w-3/6 mx-auto  rounded-lg shadow-md px-6 py-2 mb-10">
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
