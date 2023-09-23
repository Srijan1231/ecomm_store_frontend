import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../util/axiosHelper/axiosHelper";
import { Navbar } from "../../components/shared/Navbar";
import { Footer } from "../../components/shared/Footer";
import { addToCart } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { postCartItem } from "../../action/cart/cartAction";
import { Icon } from "@iconify/react";
import { updateUserAction } from "../../action/user/userAction";

export const Product = () => {
  const { _id } = useParams();
  const { user } = useSelector((state) => state.userInfo);
  console.log(_id);
  let favProductID = "";
  user.favouriteProduct.map((item) => (favProductID = item._id));
  console.log(favProductID);
  const dispatch = useDispatch();
  const [productDt, setProductDt] = useState({});
  console.log(productDt);

  useEffect(() => {
    getSelectedProduct();
  }, [_id]);
  const handleOnClickCart = (e) => {
    dispatch(postCartItem({ ...productDt, ordqty: 1 }));
    e.preventDefault();
  };
  const handleOnClickFav = (e) => {
    dispatch(updateUserAction({ _id: user._id, favourite: productDt }));
    e.preventDefault();
  };

  const getSelectedProduct = async () => {
    const { products } = await getProducts(_id);
    products?._id && setProductDt(products);
  };
  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 py-24 mx-auto border border-black rounded">
          <form>
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <img
                alt={productDt.name}
                className="object-contain lg:w-1/2 w-full  lg:h-auto h-64 lg:object-cover object-center "
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
                    onClick={handleOnClickCart}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    type="submit"
                  >
                    Add to Cart
                  </button>
                  <button
                    className="rounded-full w-10 h-10 bg-gray-200 p-0  inline-flex items-center justify-center text-gray-500 ml-4"
                    type="submit"
                    onClick={handleOnClickFav}
                  >
                    {favProductID === _id ? (
                      <Icon
                        icon="mdi:heart"
                        color="red"
                        width="50"
                        height="50"
                      />
                    ) : (
                      <Icon
                        icon="mdi:heart-outline"
                        color="red"
                        width="50"
                        height="50"
                      />
                    )}
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
