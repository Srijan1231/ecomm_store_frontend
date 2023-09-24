import React from "react";

export const PaymentOpt = ({ item, onChecked, checkedDt }) => {
  return (
    <div className="relative">
      <input
        className="peer hidden"
        id={`radio-${item._id}`}
        type="radio"
        name="paymentOption"
        onChange={onChecked}
        value={item.title}
        checked={checkedDt.paymentOption === item.title}
        required
      />
      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
      <label
        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
        htmlFor={`radio-${item._id}`}
      >
        <div className="ml-5">
          <span className="mt-2 font-semibold">{item.title}</span>
        </div>
      </label>
    </div>
  );
};
