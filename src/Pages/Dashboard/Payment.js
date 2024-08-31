import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L48bjAevmEdl8xnRCa2aJmBKzr4s6yxjYupEql3i8gBU0nVGDyiW7LCX6lix71eXeqzJUzM0VRgjJnncjkbEeNV00Z3IBSjvY"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5050/purchase/${id}`;

  const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="text-center text-4xl text-orange-400 font-semibold my-2">
        Please confirm your payment
      </h1>
      <div class="card max-w-lg  shadow-xl  bg-gray-900 rounded-md">
        <div class="card-body">
          <h2 class="text-xl font-bold">Hello, {purchase.person}</h2>
          <p>
            Your product <strong>{purchase.name}</strong> is ready!
          </p>
          <p>
            Total <strong className="text-orange-500">{purchase.price}</strong>
          </p>
          <div class="divider"></div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
