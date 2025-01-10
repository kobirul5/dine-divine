import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import Footer from "../pages/Share/Footer";
import { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import Spinner from "../pages/Share/Spinner";


const MainLayout = () => {
    const { loading, } = useContext(AuthContext)
    const location = useLocation()

    // ${location.pathname == "/" || location.pathname === "/allFood" || location.pathname === "/gallery" ? "absolute w-full z-10 border-b border-primaryColor": "h-16 bg-white"}

    // if (loading) {
    //     return <Spinner></Spinner>
    // }
    return (
        <div className="">
            <nav className={`border-b  sticky top-0 z-10 border-primaryColor bg-white bg-opacity-50`}>
                <Navbar></Navbar>
            </nav>
            <Toaster></Toaster>
            <section className="min-h-[calc(100vh-286px)]">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;