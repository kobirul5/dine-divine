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
                const { data } = await axios.get('http://localhost:3000/allFood');
                setFoods(data.slice(0,6));
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    })

    return (
        <div className="my-14">
            <h1 className="text-3xl md:text-4xl text-center font-bold">Our Top Foods</h1>
            
            <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-20 mt-10">
                {
                    foods?.map((food, idx) =>
                        <FoodCard
                            key={idx}
                            food={food}
                        ></FoodCard>)
                }
            </section>
            <div className=" flex justify-center items-center">
                <Link to="/allFood" className="btn">See All Food</Link>
            </div>
            
        </div>
    );
};

export default TopFood;