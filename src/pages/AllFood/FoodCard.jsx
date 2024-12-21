import React from 'react';

const FoodCard = ({food}) => {
    const { foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, email, name
    } = food
    return (
        <div className="card  bg-base-100 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <figure><img src={foodImage} alt={foodName} className="w-full h-56 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <span className="text-xl font-semibold text-green-600">{`$${price}`}</span>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;