import { Link } from "react-router-dom";
import BannerImage from "../../assets/img/allFood.jpg"
const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${BannerImage})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</h1>
                    <p className="mb-5">Discover a world of fresh flavors and delightful dishes. Experience gourmet meals crafted with love and the finest ingredients.
                    </p>
                    <Link to="/allFood" className="btn">All Food</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;