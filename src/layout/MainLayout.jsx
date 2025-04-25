import { Outlet} from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import Footer from "../pages/Share/Footer";
import { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { ThemeContext } from "../provider/ThemeProvider";


const MainLayout = () => {
    const { loading, } = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)

    // if (loading) {
    //     return <Spinner></Spinner>
    // }

    return (
        <div className={`${theme === "light"? "text-black/80":"text-white"}`}>
            <nav className={`border-b sticky top-0 z-10 border-primaryColor bg-white bg-opacity-70 backdrop-blur-md`}>
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