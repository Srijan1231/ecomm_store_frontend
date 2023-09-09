import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./redux/categories/categorySlice";

// import systemReducer from "./system/systemSlice";
import userReducer from "./redux/user/userSlice";
import paymentOptionReducer from "./redux/payment-option/paymentOptionSlice";
import productReducer from "./redux/product/productSlice";
import displayProductReducer from "./redux/display/displaySlice";

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    // system: systemReducer,
    userInfo: userReducer,
    paymentOptionInfo: paymentOptionReducer,
    productInfo: productReducer,
    displayProductInfo: displayProductReducer,
  },
});
