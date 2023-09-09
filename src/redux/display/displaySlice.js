import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayProduct: [],
};
const displayProductSlice = createSlice({
  name: "displayProduct",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.displayProduct = payload;
    },
  },
});

const { reducer, actions } = displayProductSlice;

export const { setdisplayProduct } = actions;

export default reducer;
