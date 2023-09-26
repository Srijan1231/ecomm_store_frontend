import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form id="payment-form" onSubmit={handleOnSubmit}>
        <PaymentElement />
        <button disabled={isProcessing}></button>
      </form>
    </>
  );
};

export default CheckOutForm;
