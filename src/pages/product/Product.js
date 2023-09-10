import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../util/axiosHelper/axiosHelper";
import { Navbar } from "../../components/shared/Navbar";
import { Footer } from "../../components/shared/Footer";
import { addToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { postCartItem } from "../../action/cart/cartAction";

export const Product = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [productDt, setProductDt] = useState({});
  console.log(productDt);

  useEffect(() => {
    getSelectedProduct();
  }, [_id]);
  const handleOnClick = (e) => {
    dispatch(postCartItem({ ...productDt, ordqty: 1 }));
    e.preventDefault();
  };

  const getSelectedProduct = async () => {
    const { products } = await getProducts(_id);
    products?._id && setProductDt(products);
  };
  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font overflow-hidden border border-black rounded-sm">
        <div className="container px-5 py-24 mx-auto">
          <form>
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={productDt.name}
                className="object-contain lg:w-1/2 w-full  lg:h-auto h-64 lg:object-cover object-center rounded"
                src={
                  process.env.REACT_APP_ROOTSERVER +
                  productDt.thumbnail?.slice(6)
                }
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {productDt.sku}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {productDt.name}
                </h1>

                <p className="leading-relaxed">{productDt.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex ml-6 items-center"></div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${productDt.price}
                  </span>
                  <button
                    onClick={handleOnClick}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    type="submit"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};
