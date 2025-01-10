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
console.log(foods)
    const handleSort =  ()=>{
        const sortFood = [...foods]?.sort((a,b)=>b.price-a.price)
        setFoods(sortFood)
        console.log(sortFood)
    }

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
                        <h1 className="mb-5 text-5xl font-bold ">Our All Foods</h1>
                        <div className="flex justify-center items-center gap-4">
                            <Link to="/">Home</Link> ||
                            <Link className="text-[#dab44d]">All Foods</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 container mx-auto px-4 flex flex-col md:flex-row justify-between">
                <div className="btn bg-primaryColor hover:bg-white  hover:border-primaryColor font-bold hover:text-primaryColor text-white ">
                    <button onClick={handleSort}>Sort by Price</button>
                </div>
                <label className="input  input-bordered border-primaryColor flex items-center gap-2 max-w-[400px]">
                    <input  onChange={(e)=> setSearch(e.target.value.toLowerCase())} type="text" className="grow" placeholder="Search" />
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