import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Tab = () => {
  const [open, setOpen] = useState("home");
  const handleOnClick = (name) => {
    setOpen(name);
  };
  console.log(open);
  return (
    <div className="pt-3">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Home</option>
          <option>Snow Gear</option>
          <option>Clothing</option>
          <option select>Shoes</option>
          <option select>Accessories</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="mb-px flex gap-6">
            <Link
              href="/"
              className={`  ${
                open === "home"
                  ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                  : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
              } `}
              onClick={() => {
                handleOnClick("home");
              }}
            >
              Home
            </Link>
            <Link
              href="/"
              className={`  ${
                open === "snowgear"
                  ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                  : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
              } `}
              onClick={() => {
                handleOnClick("snowgear");
              }}
            >
              Snow Gear
            </Link>
            <Link
              href="/"
              className={`  ${
                open === "clothing"
                  ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                  : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
              } `}
              onClick={() => {
                handleOnClick("clothing");
              }}
            >
              Clothing
            </Link>
            <Link
              href="/"
              className={`  ${
                open === "shoes"
                  ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                  : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
              } `}
              onClick={() => {
                handleOnClick("shoes");
              }}
            >
              Shoes
            </Link>

            <Link
              href="/"
              className={`  ${
                open === "accessories"
                  ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                  : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
              } `}
              onClick={() => {
                handleOnClick("accessories");
              }}
            >
              Accessories
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
