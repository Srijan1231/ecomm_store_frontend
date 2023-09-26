import React from "react";

export const CheckOutList = ({ item }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        src={process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)}
        alt={item.title}
        className="m-2 h-24 w-28 rounded-md border object-contain object-center"
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item.name}</span>
        <hr />

        <p className="text-lg font-bold">${item.price}</p>
        <span>qty:{item.ordqty}</span>
      </div>
    </div>
  );
};
