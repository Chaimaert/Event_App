import React, { useState } from 'react';
import '../../App.css';

const Resetpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Password reset!', password);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="welcome text-5xl font-semibold">
            Reset Password
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your new password.
          </p>
          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-lg font-medium" htmlFor="password">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-6">
                <label className="text-lg font-medium" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="Signin active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all ease-in-out py-3 rounded-xl text-lg"
                >
                  Reset Password
                </button>
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

export default Resetpassword;