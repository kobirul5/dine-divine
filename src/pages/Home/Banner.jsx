import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/Banner.jpg"
import { motion, } from "motion/react"

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerCard from "./BannerCard.jsx/BannerCard";


const Banner = () => {
    const awardVariant = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,

        },
        transition: {
            duration: 1,
            staggerChildren: 0.2,

        }
    }
    return (
        <div className="z-0">
            <motion.div
                className="hero h-[500px] box "
                style={{
                    backgroundImage: `url(${BannerImage})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                {/* banner card */}
                <div className="container mx-auto relative">

                    <motion.div
                        animate={{
                            // x:[-50, 900, -50],
                            y: [-180, -50, -180],
                            rotate: 360

                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop", // Can be "reverse" or "loop"
                            duration: 8, // Duration of one rotation (in seconds)
                            ease: "linear", // Smooth linear rotation
                        }}
                        className="absolute left-20 hidden md:flex"
                    >
                        <BannerCard
                            img={"https://i.ibb.co.com/bLZFnSD/Fried-Chicken.jpg"}
                            name={"Fried Chiken"}
                        ></BannerCard>
                    </motion.div>
                    <motion.div
                        animate={{
                            // x:[-50, 900, -50],
                            y: [-50, -180, -50],
                            rotate: 360

                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop", // Can be "reverse" or "loop"
                            duration: 8, // Duration of one rotation (in seconds)
                            ease: "linear", // Smooth linear rotation
                        }}
                        className="absolute right-20 hidden md:flex"
                    >
                        <BannerCard
                            img={"https://i.ibb.co.com/VjC7VLc/burger.jpg"}
                            name={" Burger"}

                        ></BannerCard>
                    </motion.div>
                </div>

                <div className="hero-content text-white text-center ">
                    <motion.div
                        variants={awardVariant}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 2 }}
                        className="max-w-md">
                        <motion.h1
                            variants={awardVariant}
                            className="mb-5 text-3xl md:text-5xl z-0 font-bold">Welcome to Our Restaurant</motion.h1>
                        <motion.p
                            // variants={awardVariant}

                            className="mb-5">Discover a world of fresh flavors and delightful dishes. Experience gourmet meals crafted with love and the finest ingredients.
                        </motion.p>
                        <motion.p
                            variants={awardVariant}
                        >
                            <Link to="/allFood" className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">All Food</Link>
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;