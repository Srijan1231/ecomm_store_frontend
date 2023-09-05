import { setProduct } from "../../redux/product/productSlice";
import { getProducts } from "../../util/axiosHelper/axiosHelper";

export const getProductsAction = () => async (dispatch) => {
  const { status, products } = await getProducts();

  if (status === "success") {
    /// mount data in the store
    dispatch(setProduct(products));
  }
};
