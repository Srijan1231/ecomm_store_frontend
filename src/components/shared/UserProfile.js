import React from "react";

import profile from "../../asset/userProfile.svg";
import { Fragment } from "react";
// import { Menu } from "@headlessui/react";

import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../util/axiosHelper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
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
    <button
      type="button"
      className="group flex shrink-0 items-center rounded-lg transition"
    >
      <span className="sr-only">Profile</span>
      <img
        alt="Man"
        src={profile}
        className="h-10 w-10 rounded-full object-cover"
      />

      <p className="ms-2 hidden text-left text-xs sm:block">
        <strong className="block font-medium">
          {item.fName + " " + item.lName}
        </strong>

        <span className="text-gray-500"> {item.email} </span>
      </p>

      <details className="group [&_summary::-webkit-details-marker]:hidden z-50 bg-white">
        <summary className="flex mt-4 cursor-pointer items-end justify-end rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="shrink-10 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          <li>
            <Link
              to={"/profile"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={"/profile"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Order Details
            </Link>
          </li>

          <li>
            <Link
              onClick={handleOnLogout}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100 hover:text-red-700"
            >
              SignOut
            </Link>
          </li>
        </ul>
      </details>
    </button>
  );
};
