import React from "react";
import { useNavigate } from "react-router-dom";

const PartCard = ({part}) => {
    const navigate = useNavigate();

    //handlePurchases
    const handlePurchases = (id) => {
        console.log(id)
      navigate(`/purchase/${id}`);
    };
  return (
    <div className="card  shadow-lg shadow-gray-900 rounded-md">
      <figure>
        <img
          src={part.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <h2 className="font-bold text-2xl">{part.name}</h2>
                  <p>Min order quantity: {part.min_quantity}</p>
                  <p>Available: {part.available_quantity}</p>
                  <p>Price: {part.price}</p>
                  <p>{part.desc}</p>
        <div className="card-actions justify-end">
          <button onClick={()=> handlePurchases(part._id)} className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PartCard;
