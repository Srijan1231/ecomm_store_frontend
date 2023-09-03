import React, { useState } from "react";
import logo from "../../asset/logo.svg";
import { loginData } from "../../util/data";
import { InputText } from "../../components/shared/InputText";
import { Link } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1524755968487-e44edcb96e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-12 lg:py-8 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" to="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo"></img>
            </Link>

            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login to IceStrike 🏔️
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Where the Icy Roads Become Your Playground.
            </p>
            <form
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleOnSubmit}
            >
              {loginData?.map((item, i) => (
                <InputText key={i} {...item} onChange={handleOnChange} />
              ))}

              <div className="col-span-6"></div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 sm:"
                >
                  Login
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account?
                  <span className="font-medium">
                    <Link to="/register" className="text-gray-700 underline">
                      Register
                    </Link>
                  </span>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
