import axios from "axios";
import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../components/shared/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
export const CheckOutStripe = ({ obj }) => {
  const callBackAPI = process.env.REACT_APP_RETURN_URL;

  const [clientSecretDt, setClientSecretDt] = useState("");
  const options = {
    clientSecret: clientSecretDt,
  };
  useEffect(() => {
    callBack();
  }, []);
  const callBack = () => {
    axios
      .post(callBackAPI, obj)
      .then((response) => {
        setClientSecretDt(response.data); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <>
      {stripePromise && clientSecretDt && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </>
  );
};
