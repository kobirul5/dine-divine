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
    const [availableFood, setAvailableFood] = useState(food.quantity)
    const navigate = useNavigate()

    const { foodName, foodImage, price,} = food
    const handlePurchase =async (e) => {
        e.preventDefault();

        // Prepare purchase data
        const purchaseData = {
            foodName,
            foodPrice: parseFloat(foodPrice),
            foodImage,
            quantity: parseInt(foodQuantity),
            buyerName: user?.displayName,
            buyerEmail: user.email,
            buyingDate: Date.now(),
        };
        // condition 
        if(availableFood < foodQuantity || availableFood == 0){
           return toast.error("Not Enough")
        }
        else if(food.email === user?.email){
            return toast.error("same User can't buy food")
        }

        // Send data to the database (API call or database integration)
        try {
            await axios.post("https://assignment-11-server-neon-eta.vercel.app/foodPurchase", purchaseData);
            toast.success("Food item Purchase successfully!");
            // navigate("/myOrders")
            handleQuantityUpdate()
        } catch (error) {
            toast.error("Failed to Purchase food item.");
        }

        // Reset form
    };

    const handleQuantityUpdate = () =>{
        setAvailableFood(availableFood - foodQuantity)
    }
    return (
        <div className="container mx-auto p-6  shadow rounded-lg">
            <h1 className="text-3xl md:text-5xl text-center font-bold mb-8">Food Purchase</h1>
            <h1 className="text-2xl font-bold mb-8">Food Available:- {availableFood} </h1>
            <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 flex justify-center items-center">
                    <img className="" src={foodImage} alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handlePurchase} className="space-y-4">
                      
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

                       
                        <div>
                            <label className="block font-medium">Quantity</label>
                            <input
                                type="number"
                                defaultValue={foodQuantity}
                                onChange={(e) => {setFoodQuantity(e.target.value)}}
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
                                className="w-full p-2 border  rounded"
                            />
                        </div>

                        {/* Buyer Email (Read-only) */}
                        <div>
                            <label className="block font-medium">Buyer Email</label>
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                className="w-full p-2 border  rounded"
                            />
                        </div>

                        
                        <div>
                            <button
                                 disabled= {food.quantity < 1 || food.quantity < foodQuantity}
                                type="submit"
                                className="w-full btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none py-2 px-4 rounded "
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

