import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Forgotpassword from "./Pages/ForgotPassword/Forgotpassword.jsx";
import Resetpassword from "./Pages/ResetPassword/Resetpassword.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Events from "./Pages/Events/Events.jsx";
import Form from "./Components/Form/Form.jsx";




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
    path: "/home/events",
    element: <Events />
  },
  {
    path: "/home/events/form",
    element: <Form />
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
