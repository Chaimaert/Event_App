import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Forgotpassword from "./Pages/ForgotPassword/Forgotpassword.jsx";
import Resetpassword from "./Pages/ResetPassword/Resetpassword.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
// import Manager from "./Pages/Dashboards/Manager/Manager.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/forgotpassword",
    element: <Forgotpassword />
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />
  },
  {
    path: "/home",
    element: <HomePage />
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Route />
      </RouterProvider>
    </div>

  );
}


export default App;
