import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
    const [food, setFood] = useState()
    const { id } = useParams()
    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://assignment-11-server-neon-eta.vercel.app/food/${id}`);
                setFood(data);
            } catch (error) {
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="container grid md:grid-cols-2 gap-5 justify-center items-center min-h-[400px] mx-auto bg-white w-10/12 rounded-lg overflow-hidden border my-14 px-10">
            <img
                src={food?.foodImage}
                alt={food?.foodName}
                className="w-full object-cover rounded-lg"
            />
            <div className="p-4 space-y-1">
                <h2 className="text-xl md:text-4xl font-bold">
                    {food?.foodName}
                </h2>

                <p className="text-gray-600 text-3xl font-bold ">
                     ${food?.price}
                </p>
                <p className="text-gray-600  ">
                    <strong>Category:</strong> {food?.foodCategory}
                </p>
                <p className="text-gray-600  ">
                    <strong>Origin:</strong> {food?.foodOrigin}
                </p>
                <p className="text-gray-600  ">
                    <strong>Quantity Available:</strong> {food?.quantity}
                </p>
                <p className="font-bold text-gray-600">Purchase Count : {food?.purchaseCount || 0}</p>
                <p className="text-gray-700 mt-2"> <strong>Description:</strong> {food?.description}</p>
                <div>
                    <Link to={`/purchase/${id}`} className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;