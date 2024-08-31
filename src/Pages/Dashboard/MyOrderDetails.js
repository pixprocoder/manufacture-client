import React from "react";
import { Link } from "react-router-dom";

const MyOrderDetails = ({ order }) => {
  const { name, _id, email, price, img } = order;

  const handleCancelOrder = () => {
    fetch(`http://localhost:5050/purchase/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="grid grid-cols-1 py-4 text-center border-2 rounded-md m-2">
      <div className="text-xl flex justify-center items-center flex-col">
        <img className="h-40 rounded-xl" src={img} alt="" />
        <h1 className="mb-1 font-extrabold text-orange-600 text-xl">{name}</h1>
        <h1>Price: {price}</h1>
      </div>
      <div className="mt-3">
        <button
          className="px-8 py-2 rounded-md bg-orange-600 hover:bg-orange-800 text-xl text-white font-bold"
          onClick={handleCancelOrder}
        >
          Cancel
        </button>
        <Link
          to={`/dashboard/payment/${_id}`}
          className=" px-8 py-2 rounded-md bg-orange-600 hover:bg-orange-800 text-xl text-white font-bold ml-4 "
        >
          Pay
        </Link>
      </div>
    </section>
  );
};

export default MyOrderDetails;
