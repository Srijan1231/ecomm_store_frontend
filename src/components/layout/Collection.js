import React from "react";
import { Link } from "react-router-dom";

export const Collection = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collections
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500"></p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <Link
                to="category/accessories/64f5d8932efcec3da0b10ad0"
                className="relative block group"
              >
                <img
                  src="https://www.dopesnow.com/images/H1664_04_7KfFnqX.jpg?w=612&dpr=2"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">Goggle</h3>

                  <span className="mt-1.5 inline-block bg-blue-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/category/clothing/64f5d8762efcec3da0b10ac6"
                className="relative block group"
              >
                <img
                  src="https://www.dopesnow.com/images/H0858_01_2JOUt1E.jpg?w=450&dpr=2"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">Pants</h3>

                  <span className="mt-1.5 inline-block bg-blue-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link
                to="/category/clothing/64f5d8762efcec3da0b10ac6"
                className="relative block group"
              >
                <img
                  src="https://www.dopesnow.com/images/H1276_01_O0dJYyn.jpg?w=525&dpr=2"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">Jackets</h3>

                  <span className="mt-1.5 inline-block bg-blue-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
