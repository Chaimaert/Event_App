import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../App.css';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email){
      // Make the API request to the Connexion endpoint
      fetch(`http://127.0.0.1:8000/org/forgotpwd/?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
          localStorage.setItem('userData', JSON.stringify(data)); 
          navigate('/resetpassword');
          // Do something with the response data
        })
        .catch((error) => {
          // Handle any errors
          alert('This account doesn\'t exist');
        });
      }
      else {
        alert('Please enter your email');
      }

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
            <form>
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
                  className="font-medium text-base text-green-400"
                  onClick={handleSubmit}
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