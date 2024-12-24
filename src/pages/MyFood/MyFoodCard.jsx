import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const MyFoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, email, name
    } = food
    return (
        <div className=' flex flex-col md:flex-row justify-center items-center md:grid-cols-2 gap-10 my-3 border p-6 rounded-2xl'>
            <div>
                <img className='md:max-w-[250px] rounded-2xl' src={foodImage} alt="" />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-5 flex-grow'>
                <div>
                    <h1 className='text-3xl font-bold'>{foodName}</h1>
                    <p className='text-2xl'><strong>Price:</strong> ${price}</p>
                    <p className='text-2xl'><strong>FoodCategory:</strong> {foodCategory}</p>
                    
                </div>
                <div className='flex md:flex-col gap-5 text-2xl'>
                    <button className='text-red-500'><FaTrash></FaTrash></button>
                    <Link to={`/updateFood/${_id}`} className=''><FaEdit /></Link>
                </div>
            </div>

        </div>
    );
};

export default MyFoodCard;