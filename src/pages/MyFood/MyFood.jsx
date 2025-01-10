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
                const { data } = await axios.get(`https://assignment-11-server-neon-eta.vercel.app/foods/${user?.email}`, { withCredentials: true });
                setFoods(data);
            }
            catch (error) {

            }
        };
        fetchData();
    }, [user?.email]);

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="container mx-auto px-5 md:px-10 my-10">
            {
                !foods.length > 0 ? <> <h2 className="text-3xl md:text-5xl text-primaryColor font-bold text-center">Your are not Add any Food Item</h2></>
                    :
                    <div className="overflow-x-auto">

                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    foods?.map((food, idx) => <MyFoodCard
                                        key={idx}
                                        food={food}
                                        idx={idx}
                                    ></MyFoodCard>)
                                }


                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyFood;