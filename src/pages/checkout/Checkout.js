import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/shared/Navbar";
import { useSelector } from "react-redux";
import { CheckOutList } from "../../components/shared/CheckOutList";
import { PaymentOpt } from "../../components/shared/PaymentOpt";
import { postOrder, stripeAPI } from "../../util/axiosHelper/axiosHelper";
import { InputText } from "../../components/shared/InputText";
import { checkOutData } from "../../util/data";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../components/shared/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
export const Checkout = () => {
  const callBackAPI = process.env.REACT_APP_RETURN_URL;
  const { cartItem } = useSelector((state) => state.cartInfo);
  const { paymentOption } = useSelector((state) => state.paymentOptionInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [clientSecretDt, setClientSecretDt] = useState({});
  console.log(clientSecretDt);
  const [userForm, setUserForm] = useState({
    shippingaddress: "",
  });
  let totalQuantity = 0;
  let priceWithOutVAT = 0;
  let totalPrice = 0;
  let deliveryPrice = 10;
  cartItem.map((item) => (totalQuantity += item.ordqty));
  cartItem.map((item) => (priceWithOutVAT += item.ordqty * item.price));
  let vatPrice = (2 / 100) * priceWithOutVAT;

  totalPrice = vatPrice + priceWithOutVAT + deliveryPrice;
  const [checkedDt, setCheckedDt] = useState({
    paymentOption: "",
    status: "pending",
    totalPrice,
  });

  const obj = {
    userInfo: userForm,
    orderItem: cartItem,
    paymentStatus: checkedDt,
  };

  useEffect(() => {
    setUserForm({ ...user, ...userForm });
    // stripeAPI();
  }, [paymentOption, user]);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post(callBackAPI, obj)
      .then((response) => {
        setClientSecretDt(JSON.stringify(response.data)); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(clientSecretDt);
  }, []);

  const options = {
    clientSecret: clientSecretDt,
  };
  // const [paymentDt, setPaymentDt] = useState([]);

  console.log(userForm);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserForm({ ...userForm, [name]: value });
  };
  const handleOnSubmit = (e) => {
    delete userForm.password;

    e.preventDefault();

    postOrder(obj);
  };

  const handleOnChecked = (e) => {
    const { name, value } = e.target;

    setCheckedDt({ ...checkedDt, [name]: value });
  };
  return (
    <div>
      <Navbar />
      <form className="mt-5 grid gap-6" onSubmit={handleOnSubmit}>
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select Link suitable payment method.
            </p>

            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {cartItem.map((item) => (
                <CheckOutList item={item} />
              ))}
            </div>

            <p className="mt-8 text-lg font-medium">Payment Methods</p>

            {paymentOption.map((item) => (
              <PaymentOpt
                item={item}
                onChecked={handleOnChecked}
                checkedDt={checkedDt}
              />
            ))}
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Your Details</p>
            <p className="text-gray-400">
              Complete your order by providing your details.
            </p>
            {checkOutData.map((item) => (
              <InputText {...item} onChange={handleOnChange} />
            ))}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">
                  ${priceWithOutVAT}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">${deliveryPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">G.S.T</p>
                <p className="font-semibold text-gray-900">${vatPrice}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${totalPrice}
              </p>
            </div>
            {stripePromise && clientSecretDt && (
              <Elements options={options} stripe={stripePromise}>
                <CheckOutForm /> PayNow
              </Elements>
            )}

            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
};
