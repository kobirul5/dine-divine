import { Outlet } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import Footer from "../pages/Share/Footer";
import { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import Spinner from "../pages/Share/Spinner";


const MainLayout = () => {
    const { loading, } = useContext(AuthContext)



    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <nav className=" ">
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