import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const Navbar = () => {
    const {user,userLogout} = useContext(AuthContext)


    const links = <>
        <li><NavLink to="/" className='btn'>Home</NavLink></li>
        <li><NavLink to="/All Foods" className='btn'>All Foods</NavLink></li>
        <li><NavLink to="/Gallery" className='btn'>Gallery</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dine Divine</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                
                {
                    user?.email ? 
                    <button onClick={userLogout} className="btn">Log Out</button>
                    :
                    <Link to="/auth/login" className="btn">Login</Link>
                }
                {/* dropdown profile option */}
                <div className={`dropdown dropdown-end ${!user?.email && "hidden"}`}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Photo"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>My Foods</a></li>
                        <li><a>Add food</a></li>
                        <li><a>My Orders</a></li>
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;