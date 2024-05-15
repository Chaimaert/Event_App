import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Forgotpassword from "./Pages/ForgotPassword/Forgotpassword.jsx";
import Resetpassword from "./Pages/ResetPassword/Resetpassword.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Events from "./Pages/Events/Events.jsx";
import Form from "./Components/Form/Form.jsx";
import ManagerLogin from "./Pages/Manager/ManagerLogin.js";
import Home from "./Pages/Manager/Home.jsx"
import Requests from "./Pages/Requests/Requests.jsx";



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
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/requests",
    element: <Requests />
  },
  {
    path: "/form",
    element: <Form />
  },
  {
    path: "/manager/Login",
    element: <ManagerLogin />
  },
  {
    path: "/manager/home",
    element: <Home />
  }

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
