import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/allFood.jpg"
import { animate, easeInOut, motion, spring } from "motion/react"
const Banner = () => {

    const awardVariant = {
        initial : {
            y: -100,
            opacity:0,
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
    return (
        <motion.div
            className="hero min-h-screen box"
            style={{
                backgroundImage: `url(${BannerImage})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-white text-center">
                <motion.div
                variants={awardVariant}
                initial="initial"
                animate="animate"
                transition={{duration:2}}
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
    );
};

export default Banner;