import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import router from "./routes/Index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import axiosInt from "./helper/ApiInstance";
import axios from "axios";
import { ApiResponse } from "./types/ApiTypes";
import { UserDetails_int } from "./types/App";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import SingUp from "./pages/Auth/SingUp";
import Expense from "./pages/expense/Expense";

function App() {
  const { state, dispatch } = useContext(UserContext);
  // routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout component
      children: [
        {
          path: "/",
          element: state.isAuth ? <Expense /> : <Login />,
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

  // get user based on token strored at localStorage
  const getUser = async () => {
    try {
      const response = await axiosInt.get<ApiResponse<UserDetails_int>>(
        "/user/get-user",
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );

      console.log("Get user response is", response.data.data);
      // toast.success(response.data.message || "Token login success");
      console.log("dispatch is called");
      dispatch({
        type: "USER_LOGIN",
        payload: { ...response.data.data, isAuth: true },
      });

      //  navigate("/");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message
        );
        return;
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {/* toast to print messages */}
      <ToastContainer />
      {/* react-routing  */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
