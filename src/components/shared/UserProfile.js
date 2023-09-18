import React from "react";

import profile from "../../asset/userProfile.svg";
import { Fragment } from "react";
// import { Menu } from "@headlessui/react";

import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../util/axiosHelper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { Popover } from "@headlessui/react";
export const UserProfile = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const handleOnLogout = () => {
    // log out from server by removing the access and refresh JWTs

    logoutUser(user._id);

    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("persist:userInfo");

    // reset store
    dispatch(setUser({}));
    navigate("/");
  };
  return (
    <Popover className="relative ">
      <Popover.Button className="flex justify-items-center">
        <img
          alt="profile"
          src={profile}
          className="h-10 w-10 rounded-full object-cover"
        />
        <p className="ms-2 hidden text-left text-xs sm:block">
          <strong className="block font-medium">
            {item.fName + " " + item.lName}
          </strong>

          <span className="text-gray-500"> {item.email} </span>
        </p>
      </Popover.Button>

      <Popover.Panel className="absolute bg-white z-10">
        <div className="flex flex-col justify-start">
          <Link
            to={"/profile"}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 hover:underline"
          >
            Profile
          </Link>
          <Link
            to={"/orderhistory"}
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700 hover:underline"
          >
            Order History
          </Link>
          <Link
            onClick={handleOnLogout}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200 hover:text-red-700 hover:underline"
          >
            Sign Out
          </Link>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
