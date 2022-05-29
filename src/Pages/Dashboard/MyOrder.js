import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyOrderDetails from "./MyOrderDetails";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const email = user?.email;
      const url = `http://localhost:5000/purchase?email=${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <section>
      <h1 className="text-xl text-center my-2 uppercase text-blue-900 font-extrabold">
        {orders.length > 0 ? `my orders ${orders.length}` : `my order`}
      </h1>
      <div>
        {orders.map((order) => (
          <MyOrderDetails key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default MyOrder;
