import React from "react";

export const CheckOutList = ({ item }) => {
  return (
    <div className="relative group">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          className="object-contain w-full h-full transition-all duration-300 group-hover:scale-125"
          src={process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)}
          alt=""
        />
      </div>
      <div className="absolute left-3 top-3"></div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div>
          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            <div>
              {item.name}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </div>
          </h3>
        </div>

        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};
