import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Tab = ({ slug, id, title }) => {
  const navigate = useNavigate();
  const { category } = useSelector((state) => state.categoryInfo);
  const [open, setOpen] = useState("");

  const handleOnClick = (name) => {
    setOpen(name);
    navigate(name);
  };

  return (
    <div className="pt-3">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Category
        </label>

        <select
          name="category"
          id="Tab"
          className="w-full rounded-md border-gray-200"
          onChange={(e) => handleOnClick(e.target.value)}
        >
          {category.map((item, i) => (
            <option value={`/category/${item.slug}/${item._id}`}>
              <Link
                to={`/category/${item.slug}/${item._id}`}
                className={`${open === `${item.title}`}`}
              >
                {item.title}
              </Link>
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="mb-px flex gap-6">
            {category.map((item, i) => (
              <Link
                to={`/category/${item.slug}/${item._id}`}
                className={`  ${
                  open === `${item.title}`
                    ? "border border-gray-300  border-b-white p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                    : "p-3 text-sm font-medium text-sky-600 shrink-0 rounded-t-lg"
                } `}
                onClick={() => {
                  handleOnClick(`${item.title}`);
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
