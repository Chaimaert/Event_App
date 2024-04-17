import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="welcome text-5xl font-semibold">Forgot Password</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your email to reset your password.
          </p>
          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <Link
                    to="/"
                    className="font-medium text-base text-green-400"
                  >
                    Back to Login
                  </Link>
                </div>
                <Link
                  to="/resetpassword"
                  className="font-medium text-base text-green-400"
                >
                  Reset Password
                </Link>
              </div>
            </form>
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

export default Forgotpassword;