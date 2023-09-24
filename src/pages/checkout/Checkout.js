import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/shared/Navbar";
import { useSelector } from "react-redux";
import { PaymentOpt } from "../../components/shared/PaymentOpt";
import { postOrder } from "../../util/axiosHelper/axiosHelper";

export const Checkout = () => {
  const { cartItem } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [userForm, setUserForm] = useState({
    shippingaddress: "",
  });
  const { paymentOption } = useSelector((state) => state.paymentOptionInfo);
  const [paymentDt, setPaymentDt] = useState([]);

  useEffect(() => {
    setPaymentDt(paymentOption);
    setUserForm({ ...user, ...userForm });
  }, [paymentOption, user]);

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

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserForm({ ...userForm, [name]: value });
  };

  const handleOnSubmit = (e) => {
    delete userForm.password;

    const obj = {
      userInfo: userForm,
      orderItem: cartItem,
      paymentStatus: checkedDt,
    };
    e.preventDefault();
    postOrder(obj);
  };
  const handleOnChecked = (e) => {
    const { name, value } = e.target;

    setCheckedDt({ ...checkedDt, [name]: value });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleOnSubmit}>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select Link suitable shipping method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {cartItem.length < 1 ? (
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  No item/s to checkout
                </div>
              ) : (
                cartItem.map((item) => (
                  <div
                    className="flex flex-col rounded-lg bg-white sm:flex-row"
                    key={item._id}
                  >
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-contain object-center"
                      src={
                        process.env.REACT_APP_ROOTSERVER +
                        item.thumbnail?.slice(6)
                      }
                      alt={item.name}
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{item.name}</span>

                      <p className="text-lg font-bold">${item.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <p className="mt-8 text-lg font-medium">Payment Methods</p>
            <div className="mt-5 grid gap-6">
              {paymentDt.map((item) => (
                <PaymentOpt
                  key={item._id}
                  item={item}
                  onChecked={handleOnChecked}
                  checkedDt={checkedDt}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">User Details</p>
            <p className="text-gray-400">
              Complete your order by providing your details.
            </p>
            <div className="flex ">
              <div className="w-full">
                <label
                  for="fname"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fName"
                    name="fName"
                    className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your First Name here"
                    onChange={handleOnChange}
                    required
                    value={userForm.fName}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  for="lName"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lName"
                    name="lName"
                    className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Last Name here"
                    onChange={handleOnChange}
                    required
                    value={userForm.lName}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label
                for="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  onChange={handleOnChange}
                  required
                  value={userForm.email}
                />
              </div>

              <label for="ph" className="mt-4 mb-2 block text-sm font-medium">
                Phone number
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="ph"
                  name="phNumber"
                  className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Phone number here"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <label
                for="shipping_address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Shipping Address
              </label>

              <div className="relative w-full flex-shrink-0">
                <input
                  type="text"
                  id="shipping_address"
                  name="shippingaddress"
                  className="w-full rounded-md border border-gray-200 px-2 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Shipping address here"
                  onChange={handleOnChange}
                  required
                  value={userForm.shippingaddress}
                />
              </div>
              <label
                for="shipping_address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>

              <div className="relative w-full flex-shrink-0">
                <input
                  type="text"
                  id="billing_address"
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-2 py-3  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Billing address here"
                  onChange={handleOnChange}
                  required
                  value={userForm.address}
                />
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    ${priceWithOutVAT}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">GST</p>
                  <p className="font-semibold text-gray-900">${vatPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">
                    ${deliveryPrice}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${totalPrice}
                </p>
              </div>
            </div>
            <button
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white "
              type="submit"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
