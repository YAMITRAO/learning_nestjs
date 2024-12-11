import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // main div h-screen w-screen
    <div className="h-screen w-screen">
      {/* header */}
      <div></div>

      {/* main */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
