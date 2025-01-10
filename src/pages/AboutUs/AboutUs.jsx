import React from "react";
import { FaUtensils, FaAward, FaSmile } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import MissionImage from "../../assets/img/resturendATT.jpg"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="  min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4  text-primaryColor">About Us</h1>
                    <p className="  text-lg">
                        Welcome to <span className="font-semibold  text-secondaryColor">Dine Divine</span>  , where culinary excellence meets a warm and inviting atmosphere. Our mission is to craft unforgettable dining experiences by blending the finest ingredients with expert artistry. From handcrafted gourmet dishes to personalized service, we aim to make every visit memorable. Whether you're celebrating a special occasion or enjoying a casual meal, our award-winning chefs and dedicated team ensure an exceptional experience. At Dine Divine, we believe in more than just food—we create connections and lasting memories. Discover the perfect blend of taste, quality, and ambiance. Join us and experience the difference at Dine Divine!
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold  text-secondaryColor mb-4">Our Mission</h2>
                        <p className=" ">
                            Our mission is to bring the finest culinary delights to our guests with an unwavering commitment to quality, flavor, and service. Whether it's a casual meal or a special occasion, we strive to make every visit to Dine Divine unforgettable.
                        </p>
                    </div>
                    <div>
                        <img
                            src={MissionImage}
                            alt="Restaurant Atmosphere"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold  text-secondaryColor mb-6 text-center">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <FaUtensils className="text-5xl  text-primaryColor mb-4" />
                            <h3 className="text-xl font-bold  text-secondaryColor">Exquisite Cuisine</h3>
                            <p className=" ">
                                Handcrafted dishes using the freshest ingredients to create unforgettable flavors.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FaAward className="text-5xl  text-primaryColor mb-4" />
                            <h3 className="text-xl font-bold  text-secondaryColor">Award-Winning Chefs</h3>
                            <p className=" ">
                                Our chefs are masters of their craft, bringing creativity and passion to every dish.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FaSmile className="text-5xl  text-primaryColor mb-4" />
                            <h3 className="text-xl font-bold  text-secondaryColor">Friendly Atmosphere</h3>
                            <p className=" ">
                                A warm and welcoming environment perfect for gatherings and celebrations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold  mb-4">
                        Experience the Difference at <span className=" text-primaryColor">Dine Divine</span>
                    </h2>
                    <Link to="/allFood" className="btn btn-primary bg-orange-500 border-0 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
                        Explore Our Menu
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
