import Lottie from "lottie-react";
import Footer from "../Share/Footer";
import Navbar from "../Share/Navbar";
import ErrorImage from "../../../public/erorr.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mx-auto px-4 ">
                <Link className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">Go Back To Home</Link>
            </div>
            <div className="w-[600px] mx-auto flex justify-center items-center text-center ">
                <Lottie
                animationData={ErrorImage}
                ></Lottie>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;