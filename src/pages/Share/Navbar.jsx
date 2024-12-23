import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AuthContext from '../../provider/AuthContext';

const Navbar = () => {
    const {user,userLogout} = useContext(AuthContext)
    const location = useLocation()


    const links = <>
        <li><NavLink to="/" className='btn text-primaryColor'>Home</NavLink></li>
        <li><NavLink to="/allFood" className='btn text-primaryColor'>All Foods</NavLink></li>
        <li><NavLink to="/gallery" className='btn text-primaryColor'>Gallery</NavLink></li>
    </>
    return (
        <div className="navbar bg-none backdrop-blur-sm static top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn  lg:hidden">
                        <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="font-bold text-primaryColor  text-xl">Dine Divine</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                
                {
                    user?.email ? 
                    <button onClick={userLogout} className="btn text-primaryColor">Log Out</button>
                    :
                    <Link to="/auth/login" className="btn text-primaryColor">Login</Link>
                }
                {/* dropdown profile option */}
                <div className={`dropdown dropdown-end ${!user?.email && "hidden"}`}>
                    <div tabIndex={0} role="button" className="btn btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Photo"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/myFood" state={user?.email}>My Foods</Link></li>
                        <li><Link to="/addFood" >Add food</Link></li>
                        <li><Link to="/myOrders" >My Orders</Link></li>
                        
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;