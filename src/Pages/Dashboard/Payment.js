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
  const url = `https://shielded-scrubland-74397.herokuapp.com/purchase/${id}`;

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
    <div>
      <h1 className="text-center text-4xl text-orange-400 font-semibold my-2">
        Please confirm your payment
      </h1>
      <div class="card max-w-lg  shadow-xl">
        <div class="card-body">
          <h2 class="text-xl text-orange-500 font-bold">
            Hello dear, {purchase.person}
          </h2>
          <p>
            Your product <strong>{purchase.name}</strong> is ready!
          </p>
          <p>
            Please pay <strong>{purchase.price}</strong>
          </p>
          <p>Thanks!!</p>
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
