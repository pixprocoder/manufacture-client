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
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative text-center ">
          <h1 className=" text-center py-20 font-bold  text-5xl text-primary uppercase">
            Available parts
          </h1>
        </div>
        {/* <PurchaseContext.Provider value="value"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {parts.map((p) => (
            <div key={p._id}>
              <div className="part-container card   shadow-xl">
                <figure>
                  <img
                    className="max-h-72 rounded-lg"
                    src={p.img}
                    alt="Shoes"
                  />
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
