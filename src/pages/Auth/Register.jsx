import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Lottie from "lottie-react";
import RegistrationAnimation from "../../../public/registrason.json"
import bgImage from "../../assets/login/image-5.jpg"

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
        <div
        style={{
            backgroundImage: `url(${bgImage})`
        }}
        className="hero min-h-[calc(100vh-64px)]">
         <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full flex-col lg:flex-row-reverse gap-10 lg:px-14">
                <div className="text-center lg:text-left flex-1 ">
                    <h1 className="text-5xl text-white font-bold">Sing up now!</h1>
                    <div className='w-full max-w-md'>
                        <Lottie animationData={RegistrationAnimation} loop={true}></Lottie>
                    </div>
                </div>
                <div className="card flex-1 backdrop-blur-lg w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white ">Your Name</span>
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
                                <span className="label-text text-white">Photo URL</span>
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
                            <button className="btn bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor border-none">Sing up</button>
                        </div>
                    </form>
                    <div className='px-8 pt-4 pb-8'>
                        <p className='text-white'>Don't have Accout? <Link className="text-orange-400" to="/auth/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;