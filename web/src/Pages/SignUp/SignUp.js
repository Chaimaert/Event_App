import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import "../../App.css";

const SignUp = () => {
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password && nom && nom && prenom && phone && email) {
      
  
      const requestData = {
        nom: nom,
        prenom: prenom,
        email: email,
        phone: phone,
        password: password
    };
  
      fetch('http://127.0.0.1:8000/org/inscription/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data === 'Added successfully') {
          
          console.log(data);
          navigate('/');
        } else {
          alert(data);
        }
          
          
        })
        .catch((error) => {
          
          // Handle any errors
          alert('An error occurred while inscription');
        });
    } else {
      alert('Please enter correctly your data');
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <p className="signtext font-medium text-lg text-500 mt-20">
            Please enter your details to sign up.
          </p>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
            
              <div>
                <label className="text-lg font-medium" htmlFor="firstname">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your First Name"
                  value={prenom}
                  onChange={(e)=>{setPrenom(e.target.value)}}
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
                  value={nom}
                  onChange={(e)=>{setNom(e.target.value)}}
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
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
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
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button type="submit" className="Signup active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all ease-in-out py-3 rounded-xl text-lg"
                      >
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

export default SignUp;
