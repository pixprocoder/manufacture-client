// import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useParts from "../../../../hooks/useParts";
import PartCard from "./PartCard";

// export const PurchaseContext = createContext("puchacess");

const Parts = () => {
  const [parts] = useParts([]);
  console.log(parts)
 

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative text-center ">
          <h1 className=" text-center py-20 font-bold  text-5xl text-primary uppercase">
            Available parts
          </h1>
        </div>
        {/* <PurchaseContext.Provider value="value"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {
            parts?.map(part => <PartCard key={part._id} part={part}/>)
          }
        </div>
        {/* </PurchaseContext.Provider> */}
      </div>
    </section>
  );
};

export default Parts;
