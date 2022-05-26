// import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useParts from "../../../../hooks/useParts";

// export const PurchaseContext = createContext("puchacess");

const Parts = () => {
  const [parts] = useParts([]);
  const navigate = useNavigate();

  //handlePurchases
  const handlePurchases = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto pb-24">
        <h1 className="text-center my-10 text-5xl text-indigo-900 uppercase">
          Available parts
        </h1>
        {/* <PurchaseContext.Provider value="value"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {parts.map((p) => (
            <div key={p._id}>
              <div className="part-container card   shadow-xl">
                <figure>
                  <img src={p.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{p.name}</h2>
                  <p>Min order quantity: {p.min_quantity}</p>
                  <p>Available: {p.available_quantity}</p>
                  <p>Price: {p.price}</p>
                  <p>{p.desc}</p>
                </div>
                <button
                  className="purchase-btn d-block py-2 px-4 uppercase"
                  onClick={() => handlePurchases(p._id)}
                >
                  purchase
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </PurchaseContext.Provider> */}
      </div>
    </section>
  );
};

export default Parts;
