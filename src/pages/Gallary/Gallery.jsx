import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FoodImage from "../../assets/img/allFood.jpg"
import Image1 from "../../assets/gallary/1.jpg"
import Image2 from "../../assets/gallary/2.jpg"
import Image3 from "../../assets/gallary/3.jpg"
import Image4 from "../../assets/gallary/4.jpg"
import Image5 from "../../assets/gallary/5.jpg"
import Image6 from "../../assets/gallary/6.jpg"
import Image7 from "../../assets/gallary/7.jpg"
import Image8 from "../../assets/gallary/8.jpg"
import Image9 from "../../assets/gallary/9.jpg"
import Image10 from "../../assets/gallary/10.jpg"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Title from "../Share/Title";

const Gallery = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="container mx-auto px-5 sm:px-10 mb-14">
            <div>
                <Title
                title={"Our Gallery"}
                image = {FoodImage}
                pageName ={"Gallery"}
                ></Title>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                <button onClick={() => setOpen(true)}>
                    {/* <img className="h-[400px] w-[400px] object-cover "  alt="" /> */}
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image1} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                               
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    {/* <img className="h-[400px] w-[400px] object-cover "  alt="" /> */}
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image2} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    {/* <img className="h-[400px] w-[400px] object-cover "  alt="" /> */}
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image3} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image4} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image5} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image6} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image7} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image8} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image9} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
                <button onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img  src={Image10} className="w-full h-full rounded-sm object-cover"/>
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                 <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe.</p>
                                </div>
                            </div>
                    </div>
                </button>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: Image1 },
                    { src: Image2 },
                    { src: Image3 },
                    { src: Image4 },
                    { src: Image5 },
                    { src: Image6 },
                    { src: Image7 },
                    { src: Image8 },
                    { src: Image9 },
                    { src: Image10 },

                ]}
            />
        </div>
    );
};

export default Gallery;