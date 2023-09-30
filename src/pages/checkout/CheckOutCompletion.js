import React from "react";
import { Navbar } from "../../components/shared/Navbar";
// import { Link } from "react-router-dom";
import { CheckOutList } from "../../components/shared/CheckOutList";
import { useSelector } from "react-redux";
import { Footer } from "../../components/shared/Footer";

export const CheckOutCompletion = () => {
  const { cartItem } = useSelector((state) => state.cartInfo);
  return (
    <>
      <Navbar />

      <div className=" sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="text-xl font-medium">Thanks for ordering</p>
            <p className="text-xl font-medium">Order Placed!!!</p>

            <p className="text-gray-400">Check your items.</p>
          </div>

          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {cartItem.map((item) => (
                <CheckOutList item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
