import React, { useContext, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const location = useLocation()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save preference
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const links = <>
        <li><NavLink to="/"  className={`btn  nav-btn hover:bg-secondaryColor hover:text-primaryColor text-primaryColor ${location.pathname === "/"}`}>Home</NavLink></li>
        <li><NavLink to="/allFood" className='btn nav-btn hover:bg-secondaryColor hover:text-primaryColor text-primaryColor'>All Foods</NavLink></li>
        <li><NavLink to="/gallery" className='btn nav-btn hover:bg-secondaryColor hover:text-primaryColor text-primaryColor'>Gallery</NavLink></li>
    </>
    return (
        <div className="navbar bg-none backdrop-blur-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn nav-btn p-1 text-primaryColor  lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-90 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Link to="/" className="font-bold text-primaryColor  text-xl">Dine Divine</Link>
                    <div>
                        <label className="grid cursor-pointer place-items-center">
                            <input
                                onClick={toggleTheme}
                                type="checkbox"
                                value="synthwave"
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                {
                    user?.email ?
                        <button onClick={userLogout} className="btn text-primaryColor border-primaryColor hover:bg-secondaryColor">Log Out</button>
                        :
                        <Link to="/auth/login" className="btn text-primaryColor border-primaryColor hover:bg-secondaryColor">Login</Link>
                }
                {/* dropdown profile option */}
                <div className={`dropdown dropdown-end z-90 ${!user?.email && "hidden"}`}>
                    <div tabIndex={0} role="button" className="btn btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Photo"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primaryColor rounded-box mt-3 w-52 z-30 p-2 shadow">
                        <li><NavLink to="/myFood" state={user?.email}>My Foods</NavLink></li>
                        <li><NavLink to="/addFood" >Add food</NavLink></li>
                        <li><NavLink to="/myOrders" >My Orders</NavLink></li>

                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;