
import { Link } from "react-router-dom";
import slide1 from "../../assets/home/slide2.jpg"
import slide2 from "../../assets/home/slide3.jpg"
import slide3 from "../../assets/home/slide4.jpg"
import slide4 from "../../assets/home/slide5.jpg"
const OnlineOrder = () => {

    return (
        <div className="container mx-auto text-center px-5">
            <div className="my-10">
                <h1 className="text-3xl md:text-4xl text-center font-bold">Online Food Order</h1>
                <p className="mx-auto text-center mt-5 md: w-8/12 ">Craving something delicious? Order your favorite meals online with ease! Enjoy fresh, high-quality dishes delivered straight to your doorstep. Satisfy your hunger with just a few clicks!</p>
            </div>
            <div className=" grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Link to="/allFood" className="relative ">
                    <img className="w-full" src={slide1} alt="" />
                    <h2 className="text-3xl font-bold   text-center absolute bottom-0 w-full text-primaryColor backdrop-blur-md p-8 ">Pizza</h2>
                </Link>
                <Link to="/allFood" className="relative">
                    <img className="w-full" src={slide2} alt="" />
                    <h2 className="text-3xl font-bold text-center absolute bottom-0 w-full text-primaryColor backdrop-blur-md p-8 ">Soup</h2>
                </Link>
                <Link to="/allFood" className="relative">
                    <img className="w-full" src={slide3} alt="" />
                    <h2 className="text-3xl font-bold text-center absolute bottom-0 w-full text-primaryColor backdrop-blur-md p-8 ">Desert</h2>
                </Link>
                <Link to="/allFood" className="relative">
                    <img className="w-full" src={slide4} alt="" />
                    <h2 className="text-3xl font-bold text-center absolute bottom-0 w-full text-primaryColor backdrop-blur-md p-8 ">Salad</h2>
                </Link>
            </div>
        </div>
    );
};

export default OnlineOrder;