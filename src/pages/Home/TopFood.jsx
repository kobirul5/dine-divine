import { useEffect, useState } from "react";
import FoodCard from "../AllFood/FoodCard";
import axios from "axios";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [foods, setFoods] = useState()

    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://assignment-11-server-neon-eta.vercel.app/topFood');
                setFoods(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    })

    return (
        <div className="my-14 container mx-auto px-5">
            <div>
            <h1 className="text-3xl md:text-4xl text-center font-bold">Our Top Foods</h1>
            <p className="mx-auto text-center mt-5 md: w-8/12 ">Experience the magic of our best-selling dishes, each crafted with care and precision to delight your senses. Loved by our guests, these signature creations combine fresh, high-quality ingredients with flavors that leave a lasting impression, perfect for every special moment.</p>
            </div>
            
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 mb-5 mt-10">
                {
                    foods?.map((food, idx) =>
                        <FoodCard
                            key={idx}
                            food={food}
                        ></FoodCard>)
                }
            </section>
            <div className=" flex justify-center items-center">
                <Link to="/allFood" className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">See All Food</Link>
            </div>
            
        </div>
    );
};

export default TopFood;