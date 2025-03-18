import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Home/>
      

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
