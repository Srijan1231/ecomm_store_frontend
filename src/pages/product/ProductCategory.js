import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCategory,
  getProductsByCategory,
} from "../../util/axiosHelper/axiosHelper";
import { Navbar } from "../../components/shared/Navbar";
import { Tab } from "../../components/shared/Tab";
import { Footer } from "../../components/shared/Footer";
import { Pagination } from "../../components/shared/Pagination";
import { useSelector } from "react-redux";

export const ProductCategory = () => {
  const { _id } = useParams();
  const { product } = useSelector((state) => state.productInfo);
  const totalNoOfProduct = product.length;
  const [productInPage, setproductInPage] = useState({});

  const [categoryDt, setCategoryDt] = useState([]);
  const [productDt, setProductDt] = useState([]);

  const getProductFromCategory = async () => {
    const { products } = await getProductsByCategory({ _id });

    setProductDt(products);
  };

  const getSelectedCategory = async () => {
    const { category } = await getCategory(_id);
    setCategoryDt(category);
  };
  useEffect(() => {
    // (async () => {
    //   const { products } = await getProducts(_id);
    //   products?._id && setForm(products);
    // })();
    getSelectedCategory();
    getProductFromCategory();
  }, [_id]); //passing _id as dependencies because _id is changing to get product from different category

  return (
    <>
      <Navbar />
      <Tab />
      <section>
        <div className="mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {categoryDt.title}
            </h2>
          </header>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Showing <span> {productDt.length} </span> product/s
            </p>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productDt.map((item) => (
              <li key={item._id}>
                <Link
                  to={`/product/${item.slug}/${item._id}`}
                  className="group block overflow-hidden"
                >
                  <img
                    src={
                      process.env.REACT_APP_ROOTSERVER +
                      item.thumbnail?.slice(6)
                    }
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>

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
        <Pagination />
      </section>
      <Footer />
    </>
  );
};
