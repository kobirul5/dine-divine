import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
    const [food, setFood] = useState()
    const { id } = useParams()
    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/food/${id}`);
                setFood(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);
    console.log(food)
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
            <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    {food.foodName}
                </h2>
                <p className="text-gray-600 text-sm">
                    <strong>Category:</strong> {food.foodCategory}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Origin:</strong> {food.foodOrigin}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Quantity Available:</strong> {food.quantity}
                </p>
                <p className="text-gray-600 text-sm">
                    <strong>Price:</strong> ${food.price.toFixed(2)}
                </p>
                <p className="text-gray-700 mt-2">{food.description}</p>
                <hr className="my-4" />
                <p className="text-gray-500 text-sm">
                    <strong>Added By:</strong> {food.addedBy.name} (
                    <a
                        href={`mailto:${food.addedBy.email}`}
                        className="text-blue-500 underline"
                    >
                        {food.addedBy.email}
                    </a>
                    )
                </p>
            </div>
        </div>
    );
};

export default FoodDetails;