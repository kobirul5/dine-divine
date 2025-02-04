import React, { useRef } from 'react';
import ReserveImag from "../../assets/img/room.jpg"
import FoodImag from "../../assets/img/food.jpg"
import { motion} from "motion/react"
const Reserve = () => {
   const scrollRef = useRef(null)
    return (
        <div
            className="hero min-h-screen my-14 "
            style={{
                backgroundImage: `url(${ReserveImag})`,
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content  text-center  md:max-w-[80%] lg:max-w-[1000px] xl:max-w-[1200px] ">
                <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-center md:p-6 gap-8 bg-white border border-primaryColor">
                    {/* Promo Card */}
                    <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity:1
                    }}
                    transition={{duration:1, delay:0.5, }}
                    viewport={{ root: scrollRef }}
                     className="card w-full flex-1  rounded-lg p-4">
                        <div className="relative">
                            <img
                                src={FoodImag}
                                alt="Delicious Food"
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center">
                                <h2 className="text-white text-4xl font-bold">30% Off</h2>
                                <p className="text-white mt-2">Online reservation only</p>
                                <button className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none mt-4">Book Now</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reservation Form */}
                    <div className="card w-full lg:w-1/2 rounded-lg p-6">
                        <h2 className="text-2xl md:text-4xl text-pr text-primaryColor font-bold text-center mb-4">Online Reservation</h2>
                        <p className="text-center text-black mb-6">
                            Booking request: +088 01958545441 or fill out the order form
                        </p>
                        <form className="space-y-4">
                            {/* Name and Phone */}
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Dropdown, Date, and Time */}
                            <div className="flex gap-4">
                                <select className="select select-bordered w-full">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                />
                                <select className="select select-bordered w-full">
                                    <option>12:00 pm</option>
                                    <option>01:00 pm</option>
                                    <option>02:00 pm</option>
                                    <option>07:00 pm</option>
                                </select>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Message"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                            ></textarea>

                            {/* Submit Button */}
                            <button className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none w-full">Book a Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reserve;