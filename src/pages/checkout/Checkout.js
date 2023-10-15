import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../../components/shared/Navbar";
import { useSelector } from "react-redux";
import { CheckOutList } from "../../components/shared/CheckOutList";

// import { postOrder } from "../../util/axiosHelper/axiosHelper";
import { InputText } from "../../components/shared/InputText";
import { checkOutData } from "../../util/data";
// import { setOrders } from "../../redux/order/orderSlice";
import { CheckOutStripe } from "./CheckOutStripe";

export const Checkout = () => {
  const { cartItem } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);

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
  console.log(obj);
  // const [paymentDt, setPaymentDt] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserForm({ ...userForm, [name]: value, _id: user._id });
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Your Details</p>
          <p className="text-gray-400">
            Complete your order by providing your details.
          </p>
          {checkOutData.map((item) => (
            <InputText {...item} key={item._id} onChange={handleOnChange} />
          ))}
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">${priceWithOutVAT}</p>
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

          {/* <button
              class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
              type="submit"
              onClick={() => setOrder(obj)}
            >
              Place Order
            </button> */}
        </div>

        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select Link suitable payment method.
          </p>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItem.map((item) => (
              <CheckOutList key={item._id} item={item} />
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Payment Methods</p>
          <CheckOutStripe obj={obj} />
        </div>
      </div>
    </div>
  );
};
