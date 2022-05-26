import React from "react";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
  const reviews = [
    {
      id: 1,
      desc: "This is the best product i have ever seen.could be car parts manufacturers, Motor Bike parts manufacturers, Bicycle parts manufacturers, camera parts manufacturers, refrigerator parts manufacturers, air conditioner parts manufacturers, table fan parts manufacturers, Clock parts manufacturers, TV parts manufacturers, microwave oven parts manufacturers, computer parts manufacturer, etc.",
      img: "img",
      rating: "3.5",
      name: "MD:Samsul Kobir",
    },
    {
      id: 2,
      desc: "This is the best product i have ever seen.could be car parts manufacturers, Motor Bike parts manufacturers, Bicycle parts manufacturers, camera parts manufacturers, refrigerator parts manufacturers, air conditioner parts manufacturers, table fan parts manufacturers, Clock parts manufacturers, TV parts manufacturers, microwave oven parts manufacturers, computer parts manufacturer, etc.",
      img: "img",
      rating: "5",
      name: "Jhanker Mahbub",
    },
    {
      id: 3,
      desc: "This is the best product i have ever seen. could be car parts manufacturers, Motor Bike parts manufacturers, Bicycle parts manufacturers, camera parts manufacturers, refrigerator parts manufacturers, air conditioner parts manufacturers, table fan parts manufacturers, Clock parts manufacturers, TV parts manufacturers, microwave oven parts manufacturers, computer parts manufacturer, etc.",
      img: "img",
      rating: "4.5",
      name: "Sahrul kobir",
    },
  ];
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div>
        <h1 className="text-5xl text-center text-primary my-24 uppercase">
          What our customer say
        </h1>
      </div>
      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Review;
