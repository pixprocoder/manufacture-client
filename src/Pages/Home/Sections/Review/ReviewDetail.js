import React, { useState } from "react";
import img from "../../../../images/bussnessIcon/consultants-g93e42d652_640.jpg";
import Rating from "react-rating";

const ReviewDetail = ({ review }) => {
  const { name, desc, rating } = review;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      <div className="card max-w-lg  p-8   overflow-visible shadow-xl">
        <div className="flex-col flex items-center">
          <div className="avatar mt-[-32px] ">
            <div className="w-32 rounded-full ring-2  ring-offset-sky-200 ">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-left mt-4">{name}</h2>
            <div>
              <Rating
                className="my-4 text-2xl text-center"
                initialRating={rating}
                // emptySymbol={}
                readonly
              ></Rating>
            </div>
          </div>
        </div>
        <div>
          {isReadMore ? desc.slice(0, 130) : desc}
          {desc.length > 130 && (
            <span className="btn btn-link" onClick={toggleReadMore}>
              {isReadMore ? "...read more" : " ...show less"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
