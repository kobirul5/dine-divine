import { Outlet } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import Footer from "../pages/Share/Footer";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <section className="min-h-[calc(100vh-286px)]">
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;