import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const { setUser, createUser, setProfileData} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value
        const photo = form.photo.value


        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
          return toast.error(
            "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
          );}



        createUser(email, password)
        .then((currentUser) => {
            const user = currentUser.user;
            setUser(user)
            setProfileData({displayName: name, photoURL: photo})
            .then(()=>{
                toast.success("Sign Up Successful")
                navigate("/")
            })
            .catch((error)=>{
                toast.error(error.message)
            })
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)

          });
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing up now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                            type="text" 
                            name="photo"
                            placeholder="Photo URL" 
                            className="input input-bordered" 
                            required />
                        </div>
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
                            <button className="btn btn-primary">Sing up</button>
                        </div>
                    </form>
                    <div className='px-8 pt-4 pb-8'>
                        <p>Don't have Accout? <Link className="text-blue-400" to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;