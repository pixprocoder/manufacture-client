import React from "react";
import useParts from "../../../../hooks/useParts";

const Parts = () => {
  const [parts] = useParts([]);
  console.log(parts);
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex gap-4">
        {parts.map((p) => (
          <div key={p._id}>
            <div class="card max-w-lg  shadow-xl">
              <figure>
                <img src={p.img} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="font-bold text-2xl">{p.name}</h2>
                <p>Min order quantity: {p.min_quantity}</p>
                <p>Available: {p.available_quantity}</p>
                <p>Price: {p.price}</p>
                <p>{p.desc}</p>
              </div>
              <button className="btn btn-outline btn-primary uppercase">
                purchase now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parts;
