import React from "react";
import { useSelector } from "react-redux";
import { CategoryItem } from "./CategoryItem";
// import { Link } from "react-router-dom";

export const Category = () => {
  const { category } = useSelector((state) => state.categoryInfo);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {category?.map((item, i) => (
              <CategoryItem
                thumbnail={item.thumbnail}
                name={item.name}
                description={item.description}
                price={item.price}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
