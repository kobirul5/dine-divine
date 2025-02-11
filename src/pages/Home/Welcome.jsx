import WelcomeImage1 from "../../assets/img/barger.jpg"
import WelcomeImage2 from "../../assets/img/welcome.jpg"
import WelcomeBg from "../../assets/img/welcome-bg.jpg"
import {motion} from "motion/react"
import { easeInOut } from "motion";
const Welcome = () => {
    return (
        <div
        className="hero bg-fixed"
        style={{
          backgroundImage: `url(${WelcomeBg})`,
        }}>
        <div className="hero-overlay  bg-opacity-80"></div>
        <motion.div
         initial={{y: 200, opacity:0}}
         whileInView={{
            y:0,
            opacity:1,
         }}
         transition={{duration:1,  ease:easeInOut}}
         className="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center my-14 justify-center  p-8">
                {/* Text Section  */}
                <div className="text-center md:text-left md:w-1/3 mb-8 md:mb-0">
                    <h1 className="text-xl text-orange-300 font-semibold mb-2">Welcome To Dine Divine</h1>
                    <h2 className="text-3xl font-bold text-white mb-4">A warm & Friendly Atmosphere</h2>
                    <p className="text-white mb-6">
                        Allow us to make your next special event extra special. We cater for all
                        sized functions, ideal for your intimate gatherings. Our team can
                        curate a menu to suit your taste.
                    </p>
                    <p className="text-orange-300 font-bold">Kobirul Islam</p>
                </div>

                {/* Image Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3">
                    <div
                        className="relative">
                        <img
                            src={WelcomeImage1}
                            alt="Dish 1"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div
                        className="relative">
                        <img
                            src={WelcomeImage2}
                            alt="Dish 2"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </motion.div>
      </div>
    );
};

export default Welcome;
