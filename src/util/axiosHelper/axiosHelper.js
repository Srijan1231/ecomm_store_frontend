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

    return data;
  } catch (error) {
    if (
      error?.response?.status === 403 &&
      error?.response?.data?.message === " jwt expired"
    ) {
      // 1. get new access Jwt
      const { status, accessJWT } = await getNewAccessJWT();
      if (status === "success") {
        sessionStorage.setItem("accessJWT", accessJWT);
        return axiosProcessor({ method, url, obj, isPrivate, refreshToken });
      }
    }
    if (error?.response?.data?.message === " jwt expired") {
      console.log("refresh token expired");
      // logoutUser();
    }
    return {
      status: "error",
      message: error.response ? error?.response?.data?.message : error.message,
      error,
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
export const updateUserFav = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/update/fav",
    obj: data,
    isPrivate: true,
  };
  console.log(data);
  return axiosProcessor(obj);
};
export const logoutUser = (data) => {
  const obj = {
    method: "post",
    url: userAPI + "/logout",
    obj: data,
  };
  return axiosProcessor(obj);
};
export const getNewAccessJWT = () => {
  const obj = {
    method: "get",
    url: userAPI + "/get/access_jwt",
    isPrivate: true,
    refreshToken: true,
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
