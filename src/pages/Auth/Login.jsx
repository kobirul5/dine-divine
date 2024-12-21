import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { signInUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        signInUser(email, password)
            .then((currentUser) => {
                const user = currentUser.user;
                setUser(user)
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                        <button className='btn w-full bg-red-300'>Google</button>
                        <p>Don't have Accout? <Link className="text-blue-400" to="/auth/register">Register</Link></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;