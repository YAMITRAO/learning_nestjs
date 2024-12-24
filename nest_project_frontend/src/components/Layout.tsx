import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

const Layout = () => {
  const { state } = useContext(UserContext);
  const location = useLocation();
  console.log("Location is", location.pathname);
  return (
    // main div h-screen w-screen
    <div className="h-screen w-screen">
      {/* header */}
      <div className="h-[60px]">
        {state.accessType === "admin" && (
          <div className="flex gap-2 mt-1 pl-1">
            {/* resource */}
            {location.pathname !== "/resources" && (
              <Link
                to="/resources"
                className="p-1 bg-green-700 rounded flex justify-center items-center "
              >
                Resources
              </Link>
            )}
            {/* expense */}
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="p-1 px-2 bg-yellow-700 rounded flex justify-center items-center "
              >
                Expense
              </Link>
            )}
          </div>
        )}
      </div>

      {/* main */}
      <main className="w-full h-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
