import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./redux/categories/categorySlice";
// import { combineReducers } from "redux";
// import systemReducer from "./system/systemSlice";
import userReducer from "./redux/user/userSlice";
import cartReducer from "./redux/cart/cartSlice";
import paymentOptionReducer from "./redux/payment-option/paymentOptionSlice";
import productReducer from "./redux/product/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const cartPersistConfig = {
  key: "cartInfo",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const store = configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    // system: systemReducer,
    userInfo: userReducer,
    paymentOptionInfo: paymentOptionReducer,
    productInfo: productReducer,
    cartInfo: persistedCartReducer,
  },
});
const persister = persistStore(store);

export { store, persister };
