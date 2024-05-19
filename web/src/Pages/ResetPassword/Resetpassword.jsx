import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password && password === confirmPassword) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const email = userData.email;
  
      const requestData = {
        email: email,
        newpassword: password,
      };
  
      fetch('http://127.0.0.1:8000/org/resetpwd/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
          navigate('/');
          // Do something with the response data
        })
        .catch((error) => {
          // Handle any errors
          alert('An error occurred while resetting the password');
        });
    } else {
      alert('Please enter correctly your password');
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="welcome text-5xl font-semibold">
            Reset Password
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Veuillez entrer votre nouveau mot de passe.
          </p>
          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-lg font-medium" htmlFor="password">
                  Nouveau mot de passe
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
                  Confirmez le mot de passe
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
                  Réinitialiser le mot de passe
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