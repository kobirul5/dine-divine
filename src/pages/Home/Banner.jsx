import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/allFood.jpg"
import { easeInOut, motion, spring } from "motion/react"
const Banner = () => {
    return (
        <motion.div
        drag
        dragTransition={{ power: 0.2 }}
            className="hero min-h-screen box"
            style={{
                backgroundImage: `url(${BannerImage})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <motion.h1
                    animate={{
                        y:[-100, 0],
                        
                    }}
                    transition={{ type:spring}}
                    className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</motion.h1>
                    <motion.p 
                         animate={{
                            x:[-500, 0],
                            
                        }}
                        transition={{ type:spring, }}
                    className="mb-5">Discover a world of fresh flavors and delightful dishes. Experience gourmet meals crafted with love and the finest ingredients.
                    </motion.p>
                    <motion.p
                    animate={{
                        x:[500, 0],
                        
                    }}
                    transition={{ type:spring, }}
                    >
                    <Link to="/allFood" className="btn">All Food</Link>
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;