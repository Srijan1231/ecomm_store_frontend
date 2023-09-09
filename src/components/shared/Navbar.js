import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.svg";
import cart from "../../asset/shoppingcart.svg";

export const Navbar = () => {
  return (
    <header className="bg-white pt-4">
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
            className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span className="sr-only">Notifications</span>
            <img src={cart} alt="cart" />
          </Link>

          <div className="flex items-center gap-12">
            <nav aria-label="Global" className="hidden md:block"></nav>

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
          </div>
        </div>
      </div>
    </header>
  );
};
