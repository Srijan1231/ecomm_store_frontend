import React from "react";

export const PaymentOpt = ({ id, title, description, onChange }) => {
  console.log(id);
  return (
    <div className="relative">
      <input
        className="peer hidden"
        id={id}
        type="radio"
        name="paymentOption"
        value={title}
        onChange={onChange}
        checked
      />
      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
      <label
        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
        for={id}
      >
        <div className="ml-5">
          <span className="mt-2 font-semibold">{title}</span>
        </div>
      </label>
    </div>
  );
};
