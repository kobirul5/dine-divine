import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../../provider/AuthContext";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value
        const email = form.email.value
        const name = form.name.value
        const foodImage = form.foodImage.value
        const foodCategory = form.foodCategory.value
        const quantity = form.quantity.value
        const price = form.price.value
        const foodOrigin = form.foodOrigin.value
        const description = form.description.value
        

        const foodData = {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            price,
            foodOrigin,
            description,
            email,
            name,
            purchaseCount: 0
        }

        try {
            await axios.post("http://localhost:3000/allFood", foodData, {withCredentials: true});
            toast.success("Food item added successfully!");
            navigate("/myFood")
        } catch (error) {
            toast.error("Failed to add food item.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-lg rounded-lg my-10">
            <h2 className="text-2xl font-bold mb-4">Add a New Food Item</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Food Name */}
                <div className="form-control">
                    <label className="label">Food Name</label>
                    <input
                        type="text"
                        name="foodName"

                        className="input input-bordered"
                        placeholder="Enter food name"
                        required
                    />
                </div>

                {/* Food Image */}
                <div className="form-control">
                    <label className="label">Food Image URL</label>
                    <input
                        type="text"
                        name="foodImage"

                        className="input input-bordered"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Food Category */}
                <div className="form-control">
                    <label className="label">Food Category</label>
                    <input
                        type="text"
                        name="foodCategory"

                        className="input input-bordered"
                        placeholder="Enter food category"
                        required
                    />
                </div>

                {/* Quantity */}
                <div className="form-control">
                    <label className="label">Quantity</label>
                    <input
                        type="number"
                        name="quantity"

                        className="input input-bordered"
                        placeholder="Enter quantity"
                        required
                    />
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label">Price</label>
                    <input
                        type="number"
                        name="price"
                        //  
                        className="input input-bordered"
                        placeholder="Enter price"
                        required
                    />
                </div>

                {/* Food Origin */}
                <div className="form-control">
                    <label className="label">Food Origin (Country)</label>
                    <input
                        type="text"
                        name="foodOrigin"

                        className="input input-bordered"
                        placeholder="Enter country"
                        required
                    />
                </div>
                {/* add by */}

                <div className="md:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered"
                                defaultValue={user?.displayName}
                                readOnly
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">Email</label>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                </div>


                {/* Description */}
                <div className="form-control md:col-span-2">
                    <label className="label">Short Description</label>
                    <textarea
                        name="description"

                        className="textarea textarea-bordered"
                        placeholder="Describe the ingredients, making procedure, etc."
                        required
                    ></textarea>
                </div>

                {/* Add Button */}
                <div className="form-control md:col-span-2">
                    <button className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none" type="submit">
                        Add Food
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;
