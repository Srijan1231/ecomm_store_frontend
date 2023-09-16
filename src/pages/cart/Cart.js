import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/shared/Navbar";
// import { Tab } from "../../components/shared/Tab";
import { Footer } from "../../components/shared/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../action/cart/cartAction";
// import { removeFromCart } from "../../redux/cart/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);
  let totalQuantity = 0;
  let priceWithOutVAT = 0;
  let totalPrice = 0;
  cartItem.map((item) => (totalQuantity += item.ordqty));
  cartItem.map((item) => (priceWithOutVAT += item.ordqty * item.price));
  let vatPrice = (2 / 100) * priceWithOutVAT;

  totalPrice = vatPrice + priceWithOutVAT;

  const handleOnRemove = (_id) => {
    console.log(_id);
    dispatch(removeCartItem(_id));
  };

  return (
    <>
      <Navbar />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartItem.map((item, i) => (
                  <li className="flex items-center gap-4">
                    <Link to={`/product/${item.slug}/${item._id}`}>
                      <img
                        src={
                          process.env.REACT_APP_ROOTSERVER +
                          item.thumbnail?.slice(6)
                        }
                        alt={item.name}
                        className="h-16 w-16 rounded object-contain"
                      />
                    </Link>

                    <div>
                      <h3 className="text-sm text-gray-900">{item.name}</h3>
                      <h4>${item.price}</h4>
                    </div>
                    <div className="flex justify-between">
                      <dd>-- ${item.ordqty * item.price}</dd>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label htmlFor="Line1Qty" className="sr-only">
                          {" "}
                          Quantity{" "}
                        </label>

                        <input
                          type="number"
                          min="1"
                          value={item.ordqty}
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </form>

                      <button
                        className="text-gray-600 transition hover:text-red-600"
                        onClick={() => handleOnRemove(item._id)}
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>VAT 2%</dt>
                      <dd>{vatPrice}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Total items</dt>
                      <dd>{totalQuantity}</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${totalPrice}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <p className="whitespace-nowrap text-xs">
                        Shipping calculated at checkout
                      </p>
                    </span>
                  </div>
                  {user._id ? (
                    <div className="flex justify-end">
                      <Link
                        to={"/checkout"}
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </Link>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <Link
                        to={"/login"}
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
