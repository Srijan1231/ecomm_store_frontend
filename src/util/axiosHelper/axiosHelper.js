import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOT_API;
const userAPI = rootAPI + "/user";

const categoryAPI = rootAPI + "/category";
const paymentOptionAPI = rootAPI + "/paymentoption";
const productAPI = rootAPI + "/product";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

const axiosProcessor = async ({
  method,
  url,
  obj,
  isPrivate,
  refreshToken,
}) => {
  const token = refreshToken ? getRefreshJWT() : getAccessJWT();

  const headers = {
    Authorization: isPrivate ? token : null,
  };
  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      headers,
    });
    console.log(data);
    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === "jwt expired"
    ) {
      //1. get new accessJWt
      const { status, accessJWT } = await getAccessJWT();
      if (status === "success" && accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }

      //2. continue the request

      return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
    };
  }
};
export const getUserInfo = () => {
  const obj = {
    method: "get",
    url: userAPI,
    isPrivate: true,
  };
  return axiosProcessor(obj);
};
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: userAPI,
    obj: data,
  };
  console.log(obj);
  console.log(userAPI);
  return axiosProcessor(obj);
};
export const signInUser = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/sign-in",
    obj: data,
  };
  return axiosProcessor(obj);
};
//products
export const getProducts = (_id) => {
  const obj = {
    method: "get",
    url: _id ? productAPI + "/" + _id : productAPI,
  };
  return axiosProcessor(obj);
};
export const getProductsByCategory = ({ _id }) => {
  const obj = {
    method: "get",
    url: productAPI + "/category/" + _id,
  };
  return axiosProcessor(obj);
};
//category
export const getCategory = (_id) => {
  const obj = {
    method: "get",
    url: _id ? categoryAPI + "/" + _id : categoryAPI,
  };
  return axiosProcessor(obj);
};
//paymentOptions
export const getPaymentOption = (_id) => {
  const obj = {
    method: "get",
    url: _id ? paymentOptionAPI + "/" + _id : paymentOptionAPI,
  };
  return axiosProcessor(obj);
};
