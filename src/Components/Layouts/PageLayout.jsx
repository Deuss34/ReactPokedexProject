import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function PageLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
