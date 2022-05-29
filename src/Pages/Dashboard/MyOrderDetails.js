import React from "react";

const MyOrderDetails = ({ order }) => {
  const { name, _id, email } = order;
  return (
    <section className="grid grid-cols-1 py-4">
      <div className="text-xl">
        <h1 className="mb-1">{name}</h1>
        <h1 className="mb-1">{_id}</h1>
        <h1 className="mb-1">{email}</h1>
      </div>
      <div className="mt-3">
        <button className="btn btn-xs btn-primary ">Cancel</button>
        <button className="btn btn-xs btn-primary ml-4 ">Pay</button>
      </div>
    </section>
  );
};

export default MyOrderDetails;
