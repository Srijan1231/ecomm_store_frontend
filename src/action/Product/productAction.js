import { setProduct } from "../../redux/product/productSlice";
import {
  getProducts,
  getProductsByCategory,
} from "../../util/axiosHelper/axiosHelper";

export const getProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();

  if (status === "success") {
    /// mount data in the store
    dispatch(setProduct(products));
  }
};
export const getProductByCategoryAction = () => async (dispatch) => {
  const { status, products } = await getProductsByCategory();
  if (status === "success") {
    dispatch(setProduct(products));
  }
};
