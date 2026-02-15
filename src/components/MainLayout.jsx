import { Outlet } from "react-router-dom";
import WhatsAppFloat from "./WhatsAppFloat";
import Footer1 from "./Footer1";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <WhatsAppFloat />
      <Navbar/>

      <div className="min-h-screen">
        <Outlet />   {/* All child pages render here */}
      </div>

      <Footer1 />
    </>
  );
};

export default MainLayout;