import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import { postOrderItem } from "../../action/order/orderAction";
import { removeFromCart } from "../../redux/cart/cartSlice";

const CheckOutForm = ({ obj }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  //   // Create PaymentIntent as soon as the page loads

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    postOrderItem(obj);

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,

      confirmParams: {
        return_url: `${window.location.origin}/checkout/completion`,
      },
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleOnSubmit}>
        <PaymentElement />
        <button
          disabled={isProcessing}
          id="submit"
          type="submit"
          className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        >
          <span id="button-text">
            {isProcessing ? "Processing...." : "Pay Now "}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};

export default CheckOutForm;
