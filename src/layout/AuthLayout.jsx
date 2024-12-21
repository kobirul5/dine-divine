import { Outlet } from "react-router-dom";
import Navbar from "../pages/Share/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;