import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
