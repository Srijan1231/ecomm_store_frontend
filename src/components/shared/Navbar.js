import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.svg";
import fav from "../../asset/fav.svg";

import { useSelector } from "react-redux";
import { UserProfile } from "./UserProfile";

export const Navbar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { cartItem } = useSelector((state) => state.cartInfo);
  return (
    <header className="bg-white pt-8">
      <div className="mx-auto my-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div class="relative hidden sm:block ">
            <label class="sr-only" for="search">
              Search
            </label>

            <input
              class="h-10 w-full rounded-lg border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              class="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <Link
            to={"/cart"}
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <span className="sr-only">Cart</span>
            <div className="flex">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span class="absolute inset-0 object-right-top -mr-6">
                <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {cartItem.length}
                </div>
              </span>
            </div>
          </Link>
          <Link
            to={"/cart"}
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <span className="sr-only">Fav</span>
            <div className="flex">
              <img src={fav} alt="fav" />
              <span class="absolute inset-0 object-right-top -mr-6">
                <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {user.favouriteProduct.length}
                </div>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-12">
            <nav aria-label="Global" className="hidden md:block"></nav>
            {user._id ? (
              <UserProfile item={user} />
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <Link
                    className="rounded-md border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Login
                  </Link>

                  <div className="flex gap-4 ">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
