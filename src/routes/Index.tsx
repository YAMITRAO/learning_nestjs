import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Layout from "../components/Layout";
import SingUp from "../pages/Auth/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SingUp />,
      },
    ],
  },
]);

export default router;
