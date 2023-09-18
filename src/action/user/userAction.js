import toast from "react-hot-toast";
import {
  getUserInfo,
  postNewUser,
  signInUser,
  updateUserFav,
} from "../../util/axiosHelper/axiosHelper";
import { setUser } from "../../redux/user/userSlice";

export const createNewUserAction = async (obj) => {
  const pendingResp = postNewUser(obj);

  toast.promise(pendingResp, {
    loading: "Please await..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const signInUserAction = (obj) => async (dispatch) => {
  const pendingResp = signInUser(obj);

  toast.promise(pendingResp, {
    pending: "Please await..",
  });
  const { status, message, token } = await pendingResp;

  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);

    dispatch(getUserProfileAction());
  }

  //get the user data and mount in the state
};

//get user profile
export const getUserProfileAction = () => async (dispatch) => {
  //call the api to get user info
  const { status, user } = await getUserInfo();
  //mount the state with the user data

  if (status === "success") {
    dispatch(setUser(user));
  }
};
export const updateUserAction = (obj) => async (dispatch) => {
  const pendingResp = updateUserFav(obj);

  toast.promise(pendingResp, {
    loading: "Please await..",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
  status === "success" && dispatch(getUserProfileAction());
};
