import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FoodCard from "./FoodCard";
import FoodImage from "../../assets/img/allFood.jpg"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [search , setSearch] = useState("")
    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://assignment-11-server-neon-eta.vercel.app/allFood', { withCredentials: true})
                setFoods(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);
    return (
        <div className="">
            <div
                className="hero min-h-[400px]"
                style={{
                    backgroundImage: `url(${FoodImage})`,
                }}>
                <div className="hero-overlay bg-opacity-85 "></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
                        <div className="flex justify-center items-center gap-4">
                            <Link to="/">Home</Link> ||
                            <Link className="text-[#dab44d]">All Foods</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 container mx-auto px-4 ">
                <label className="input input-bordered flex items-center gap-2 max-w-[400px]">
                    <input onChange={(e)=> setSearch(e.target.value.toLowerCase())} type="text" className="grow" placeholder="Search" />
                    {/* <button className=""><FaSearch /></button> */}
                </label>
            </div>
            <section className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-20 mt-10">
                {
                    foods?.filter((f)=>{
                        return search.toLowerCase() === "" ? f : f.foodName.toLowerCase().includes(search)
                    }).map((food, idx) =>
                        <FoodCard
                            key={idx}
                            food={food}
                        ></FoodCard>)
                }
            </section>
        </div>
    );
};

export default AllFood;