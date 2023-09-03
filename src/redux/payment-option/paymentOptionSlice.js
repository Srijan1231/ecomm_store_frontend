import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentOption: [],
};
const paymentOptionSlice = createSlice({
  name: "paymentOption",
  initialState,
  reducers: {
    setPaymentOption: (state, { payload }) => {
      state.paymentOption = payload;
    },
  },
});

const { reducer, actions } = paymentOptionSlice;

export const { setPaymentOption } = actions;

export default reducer;
