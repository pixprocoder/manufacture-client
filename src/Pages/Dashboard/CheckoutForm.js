import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await fetch("/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price: 34 }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch payment intent");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
        console.log("Client secret:", data.clientSecret);
      } catch (error) {
        console.error("Error fetching payment intent:", error);
        // Handle error here, e.g., setClientSecret('')
      }
    };

    fetchPaymentIntent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error?.message || "");
    } else {
      // console.log("payment methord", paymentMethod);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p>{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
