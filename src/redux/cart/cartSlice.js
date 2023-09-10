import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const isThisanewitem = state.cartItem.find(
        (item) => item._id === payload._id
      );

      console.log(!isThisanewitem);
      if (!isThisanewitem) {
        state.cartItem.push(payload);

        return;
      } else {
        const indexOfItemToBeReplaced = state.cartItem.findIndex(
          (item) => item._id === payload._id
        );
        payload.ordqty += state.cartItem[indexOfItemToBeReplaced].ordqty;
        console.log(indexOfItemToBeReplaced);
        console.log(payload);
        // replace item from cart and with new paylaod
        state.cartItem.splice(indexOfItemToBeReplaced, 1);
        state.cartItem.push(payload);
      }

      // action has the product adding to cart,
      //filter out coming product from  state.cartItem
      //push coming product to cart
    },
    removeFromCart(state, { payload }) {
      console.log(payload);
      state.cartItem = state.cartItem.filter((item) => item._id !== payload);
    },
    // updateQTYMan(state, { payload }) {
    //   console.log(payload);
    //   state.cartItem = state.cartItem.map((item)=>)
    // },
  },
});

const { reducer, actions } = cartSlice;

export const { addToCart, removeFromCart } = actions;

export default reducer;
