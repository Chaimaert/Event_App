import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css";

const SignUp = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <p className="signtext font-medium text-lg text-500 mt-20">
            Please enter your details to sign up.
          </p>
          <div className="mt-4">
            <div>
              <label className="text-lg font-medium" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your First Name"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Last Name"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="phonenumber">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Password"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="Signup active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all ease-in-out py-3 rounded-xl text-lg">
                Sign up
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Already have an account?</p>
              <Link
                to={"/"}
                className="font-medium text-base text-green-400 ml-2"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-green-500 to-gray-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default SignUp;
