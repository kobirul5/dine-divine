import { useContext, useEffect, useState } from "react";
import AuthContext from "../../provider/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Spinner from "../Share/Spinner";

const MyFood = () => {
    const [foods, setFoods] = useState()
    const {user, loading} = useContext(AuthContext)

    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/foods/${user?.email}`);
                setFoods(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [user?.email]);

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            hi
            {foods?.length}
        </div>
    );
};

export default MyFood;