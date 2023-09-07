import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productByCat: [],
};
const productByCatSlice = createSlice({
  name: "productByCat",
  initialState,
  reducers: {
    setProductByCat: (state, { payload }) => {
      state.productByCat = payload;
    },
  },
});

const { reducer, actions } = productByCatSlice;

export const { setProductByCat } = actions;

export default reducer;
