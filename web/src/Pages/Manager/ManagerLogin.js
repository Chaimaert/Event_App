import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const ManagerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    if(email && password){
    // Make the API request to the Connexion endpoint
    fetch(`http://127.0.0.1:8000/mgr/connexion/?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        localStorage.setItem('userData', JSON.stringify(data)); 
        navigate('/manager/home');
        // Do something with the response data
      })
      .catch((error) => {
        // Handle any errors
        alert('Login or Password Incorrect');
      });
    }
    else {
      alert('Please enter your email and password');
    }
  };
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="welcome text-5xl font-semibold">Welcome Back Manager</h1>
          <div className="mt-8">
            <div>
              <label className="text-lg font-medium" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <label className="text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-10 flex flex-col gap-y-4">
              <button className="Signin active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all ease-in-out py-3 rounded-xl text-lg"
                      onClick={handleLogin}>
                Login
              </button>
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

export default ManagerLogin;
