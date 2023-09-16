import { setPaymentOption } from "../../redux/payment-option/paymentOptionSlice";
import { getPaymentOption } from "../../util/axiosHelper/axiosHelper";

export const getPaymentOptionAction = () => async (dispatch) => {
  const { status, paymentOption } = await getPaymentOption();

  if (status === "success") {
    /// mount data in the store
    dispatch(setPaymentOption(paymentOption));
  }
};
