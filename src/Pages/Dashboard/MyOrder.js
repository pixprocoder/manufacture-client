import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
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
          setOrder(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>yah Im in my order component {order.length}</h1>
    </div>
  );
};

export default MyOrder;
