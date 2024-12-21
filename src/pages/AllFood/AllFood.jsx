import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FoodCard from "./FoodCard";

const AllFood = () => {
    const [foods, setFoods] = useState()

    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
          try {
            const {data} = await axios.get('http://localhost:3000/allFood');
            setFoods(data);       
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();  
      }, []);  
    return (
        <div>
           <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
            {
                foods?.map((food,idx)=>
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