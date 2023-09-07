import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const { product } = useSelector((state) => state.productInfo);
  return (
    <section>
      <div className="max-w-screen-2xl px-2 py-1 mx-auto sm:px-6 sm:py-12 lg:px-1">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            All Products
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {product.map((item, i) => (
            <li>
              <Link
                to={`/product/${item.slug}/${item._id}`}
                className="block overflow-hidden group"
              >
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt={item.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {item.name}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> </span>

                    <span className="tracking-wider text-gray-900">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
