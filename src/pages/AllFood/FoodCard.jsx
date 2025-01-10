
import { Link, useLocation } from 'react-router-dom';

const FoodCard = ({food}) => {
    const {_id, foodName, foodImage, foodCategory, purchaseCount, quantity, price, foodOrigin, description, email, name
    } = food
    const location = useLocation()
    return (
        <div className="card  bg-base-100 shadow-xl border border-secondaryColor">
            <figure><img src={foodImage} alt={foodName} className="w-full h-56 object-cover" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title">{foodName}</h2>
                {
                    location.pathname === "/" && <p> <strong>Daily Sell:-</strong> {purchaseCount}</p>
                }
                <p>{description.slice(0,40)}...</p>
                <div className="card-actions justify-between items-center">
                    <p className="text-xl  text-primaryColor font-bold">{`$${price}`}</p>
                    <Link to={`/foodDetails/${_id}`} className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none font-bold ">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;