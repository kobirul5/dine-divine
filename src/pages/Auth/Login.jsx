import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/icons/google.png';
import toast from "react-hot-toast";
import LoginAnimation from "../../../public/Login.json"
import Lottie from "lottie-react";
import bgImage from "../../assets/login/image-5.jpg"

const Login = () => {
    const {user, signInUser, setUser, handleGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        signInUser(email, password)
            .then((currentUser) => {
                const user = currentUser.user;
                setUser(user)
                toast.success("Login Successful")
                navigate(location?.state ? location.state: "/" )
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error("Please Enter Valid Email And Password")
            });

    }

    const handleGoogleUser = ()=>{
        handleGoogle()
        navigate("/")

    }

    return (
        <div 
        style={{
            backgroundImage: `url(${bgImage})`
        }}
        className="hero min-h-[calc(100vh-64px)]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse bg-transparent">
                <div className=" text-center lg:text-left flex-1">
                    <h1 className="text-5xl text-white font-bold text-center">Login now!</h1>
                    <div className="w-full max-w-md">
                        <Lottie animationData={LoginAnimation} loop={true}></Lottie>
                    </div>
                </div>
                <div className="card flex-1 backdrop-blur-lg w-full max-w-xl shrink-0 shadow-2xl1">
                    <form onSubmit={handleLogin} className="card-body pb-0 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">Login</button>
                        </div>
                    </form>
                    <div className='px-8 pt-8 pb-8'>
                        <div onClick={handleGoogleUser} className='btn w-full border'>
                            <img className="w-6" src={GoogleIcon} alt="" />
                            <button>Login With Google</button>
                        </div>
                        <p className="mt-2 text-white">Don't have Accout? <Link className="text-orange-400" to="/auth/register">Register</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;