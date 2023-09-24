import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";
import toast from "react-hot-toast";
export const postCartItem = (product) => (dispatch) => {
  toast.success("Product added to cart");

  dispatch(addToCart(product));
};
export const removeCartItem = (_id) => (dispatch) => {
  toast.error("Product removed from cart");
  dispatch(removeFromCart(_id));
};
