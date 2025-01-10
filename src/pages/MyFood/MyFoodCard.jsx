import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const MyFoodCard = ({ food, idx }) => {
    const { _id, foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, email, name
    } = food
    return (
        <tr>
            <th>{idx+1}</th>
            <td> <img className='w-20' src={foodImage} alt="" /> </td>
            <td>{foodName}</td>
            <td>{description.slice(0,50)}...</td>
            <td className='text-2xl text-secondaryColor'><Link to={`/updateFood/${_id}`}><FaEdit></FaEdit></Link></td>
        </tr>
    );
};

export default MyFoodCard;