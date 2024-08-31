import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import MyOrderDetails from "./MyOrderDetails";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const email = user?.email;
      const url = `http://localhost:5050/purchase?email=${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, navigate]);

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
