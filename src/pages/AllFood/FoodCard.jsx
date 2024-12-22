
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    const {_id, foodName, foodImage, foodCategory, quantity, price, foodOrigin, description, email, name
    } = food
    return (
        <div className="card  bg-base-100 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <figure><img src={foodImage} alt={foodName} className="w-full h-56 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p>{description.slice(0,40)}...</p>
                <div className="card-actions justify-between items-center">
                    <p className="text-xl font-semibold text-green-600">{`$${price}`}</p>
                    <Link to={`/foodDetails/${_id}`} className="btn font-bold ">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;