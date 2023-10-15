import React from "react";
import { Navbar } from "../../components/shared/Navbar";
// import { Link } from "react-router-dom";
/* The above code is importing the `CheckOutList` component from a file located in the
`../../components/shared` directory. It is also importing the `useSelector` function from the
"react-redux" library. */
import { CheckOutList } from "../../components/shared/CheckOutList";
import { useSelector } from "react-redux";
import { Footer } from "../../components/shared/Footer";

export const CheckOutCompletion = () => {
  const { cartItem } = useSelector((state) => state.cartInfo);
  return (
    <>
      <Navbar />

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Thanks for ordering
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600"></p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4 ">
            {cartItem.map((item) => (
              <CheckOutList item={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
