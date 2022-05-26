import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, [purchaseId]);
  return (
    <section className="h-screen flex justify-center items-center">
      <h1>purchase now : {purchase.name}</h1>
    </section>
  );
};

export default Purchase;
