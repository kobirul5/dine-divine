import { useContext, useEffect, useState } from "react";
import AuthContext from "../../provider/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Spinner from "../Share/Spinner";
import MyFoodCard from "./MyfoodCard";

const MyFood = () => {
    const [foods, setFoods] = useState([])
    const { user, loading } = useContext(AuthContext)

    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://assignment-11-server-neon-eta.vercel.app/foods/${user?.email}`, {withCredentials:true});
                setFoods(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [user?.email]);

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="container mx-auto px-5 md:px-10 my-10">

            <div className="max-w-[80%] mx-auto">
                {
                    foods?.map((food, idx) => <MyFoodCard
                        key={idx}
                        food={food}
                    ></MyFoodCard>)
                }
            </div>
        </div>
    );
};

export default MyFood;