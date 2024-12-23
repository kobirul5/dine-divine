import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/icons/google.png';
import toast from "react-hot-toast";
import LoginAnimation from "../../../public/Login.json"
import Lottie from "lottie-react";
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
                console.log(errorMessage)

            });

    }

    const handleGoogleUser = ()=>{
        handleGoogle()
        navigate("/")

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="w-full max-w-md">
                        <Lottie animationData={LoginAnimation} loop={true}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl flex-1">
                    <form onSubmit={handleLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='px-8 pt-4 pb-8'>
                        <div onClick={handleGoogleUser} className='btn w-full border'>
                            <img className="w-6" src={GoogleIcon} alt="" />
                            <button>Login With Google</button>
                        </div>
                        <p>Don't have Accout? <Link className="text-blue-400" to="/auth/register">Register</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;