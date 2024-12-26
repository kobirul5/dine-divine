import { Link } from "react-router-dom";

const BannerCard = ({img, name}) => {
    return (
        <div className="relative p-5 border rounded-xl backdrop-blur-sm">
           <Link to="/allFood" className="rounded-xl">
           <img className="w-52 h-52 object-cover rounded-xl" src={img} alt="" /> 
           <p className="absolute text-2xl text-white p-2 font-bold backdrop-blur-sm rounded-2xl top-1/2 left-10 ">30% Discount <br />{name}</p>
           </Link>
        </div>
    );
};

export default BannerCard;