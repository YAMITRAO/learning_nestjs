import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // main div h-screen w-screen
    <div className="h-screen w-screen">
      {/* header */}
      <div className="h-[60px]"></div>

      {/* main */}
      <main className="w-full h-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
