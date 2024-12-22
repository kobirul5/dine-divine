import { useContext, useState } from "react";
import AuthContext from "../../provider/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    const [foodPrice, setFoodPrice] = useState(food.price);
    const [foodQuantity, setFoodQuantity] = useState(1);
    const navigate = useNavigate()

    const { foodName, foodImage, price} = food
    const handlePurchase =async (e) => {
        e.preventDefault();

        // Prepare purchase data
        const purchaseData = {
            foodName,
            foodPrice: parseFloat(foodPrice),
            quantity: parseInt(foodQuantity),
            buyerName: user?.displayName,
            buyerEmail: user.email,
            buyingDate: Date.now(),
        };

        // Send data to the database (API call or database integration)
        try {
            await axios.post("http://localhost:3000/foodPurchase", purchaseData);
            toast.success("Food item Update successfully!");
            navigate("/myOrders")
        } catch (error) {
            toast.error("Failed to Update food item.");
        }

        // Reset form
    };
    console.log(foodName, price)
    return (
        <div className="container mx-auto p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Food Purchase</h1>
            <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 flex justify-center items-center">
                    <img className="" src={foodImage} alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handlePurchase} className="space-y-4">
                        {/* Food Name */}
                        <div>
                            <label className="block font-medium">Food Name</label>
                            <input
                                type="text"
                                value={foodName}
                                readOnly
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block font-medium">Price</label>
                            <input
                                type="number"
                                value={price * foodQuantity}
                                onChange={(e) => setFoodPrice(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block font-medium">Quantity</label>
                            <input
                                type="number"
                                defaultValue={foodQuantity}
                                onChange={(e) => setFoodQuantity(e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        {/* Buyer Name (Read-only) */}
                        <div>
                            <label className="block font-medium">Buyer Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="w-full p-2 border bg-gray-100 rounded"
                            />
                        </div>

                        {/* Buyer Email (Read-only) */}
                        <div>
                            <label className="block font-medium">Buyer Email</label>
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                className="w-full p-2 border bg-gray-100 rounded"
                            />
                        </div>

                        {/* Purchase Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Purchase
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;

