import React from "react";
import { Link } from "react-router-dom";

export const CategoryItem = ({ thumbnail, name, description, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={thumbnail}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {name}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {description}
        </h2>
        <p className="mt-1">{price}</p>
      </div>
    </div>
  );
};
