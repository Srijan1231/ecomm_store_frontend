import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};
const cartSlice = createSlice(
  {
    name: "cartItem",
    initialState,
    reducers: {
      addToCart(state, { payload }) {
        const isThisanewitem = state.cartItem.find(
          (item) => item._id === payload._id
        );

        if (!isThisanewitem) {
          state.cartItem.push(payload);

          return;
        } else {
          const indexOfItemToBeReplaced = state.cartItem.findIndex(
            (item) => item._id === payload._id
          );
          payload.ordqty += state.cartItem[indexOfItemToBeReplaced].ordqty;

          // replace item from cart and with new paylaod
          state.cartItem.splice(indexOfItemToBeReplaced, 1);
          state.cartItem.push(payload);
        }

        // action has the product adding to cart,
        //filter out coming product from  state.cartItem
        //push coming product to cart
      },
      removeFromCart(state, { payload }) {
        state.cartItem = state.cartItem.filter((item) => item._id !== payload);
      },
      updateQTYMan(state, { payload }) {
        state.cartItem = state.cartItem.map((item) => item.ordqty);
      },
    },
  }
  // {
  //   name: "cartTotalQuantity",
  //   initialState,
  //   reducer: {
  //     totalQuantity(state, { payload }) {
  //       state.cartTotalQuantity =
  //     },
  //   },
  // }
);

const { reducer, actions } = cartSlice;

export const { addToCart, removeFromCart } = actions;

export default reducer;
