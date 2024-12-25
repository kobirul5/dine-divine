import WelcomeImage1 from "../../assets/img/barger.jpg"
import WelcomeImage2 from "../../assets/img/welcome.jpg"
import { animate, easeInOut, motion, spring } from "motion/react"
const Welcome = () => {
    return (
        <div className="bg-primaryColor my-14 py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center my-14 justify-center  p-8">
                {/* Text Section */}
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
                    <motion.div 
                    animate={{
                        y:[0, -100, 0, 100,0]
                    }}

                    transition={{duration:4, delay:0.2, repeat: Infinity,}}
                    className="relative">
                        <img
                            src={WelcomeImage1}
                            alt="Dish 1"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                    <motion.div 
                    animate={{
                        y:[0, -100, 0, 100,0]
                    }}
                    transition={{duration:5, delay:0.5, repeat: Infinity,}}
                    className="relative">
                        <img
                            src={WelcomeImage2}
                            alt="Dish 2"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
