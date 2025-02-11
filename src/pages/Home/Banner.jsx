import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/Banner.jpg"
import { motion, } from "motion/react"
import BannerCard from "./BannerCard.jsx/BannerCard";
import { memo } from "react";
import cardImage1 from "../../assets/img/cardImage1.jpg"
import cardImage2 from "../../assets/img/cardImage2.jpg"

const Banner =  memo(({ img, name }) => {
    const awardVariant = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } },
    };

    const cardAnimation = {
        animate: { y: [-50, -100, -50], rotate: [0, 10, -10, 0] },
        transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    };
    const cardAnimation2 = {
        animate: { y: [-100, -50, -100], rotate: [0, 10, -10, 0] },
        transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    };

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
                        {...cardAnimation}
                        className="absolute left-20 hidden md:flex"
                    >
                        <BannerCard
                            img={cardImage2}
                            name={"Fried Chiken"}
                        ></BannerCard>
                    </motion.div>
                    <motion.div
                       {...cardAnimation2}
                        className="absolute right-20 hidden md:flex"
                    >
                        <BannerCard
                            img={cardImage1}
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
                        <motion.div
                            variants={awardVariant}
                        >
                            <Link to="/allFood" className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">All Food</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
});

export default Banner;