import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo-01.png"
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../Provider/AuthProvider';
import LogoutModal from '../Modals/LogoutModal';
const Navbar = () => {
    const { user, isModalOpen, setIsModalOpen } = use(AuthContext)
    const handleLogout=()=>{
        setIsModalOpen(true)
    }
    const links = <>
        <div className='flex gap-6 font-medium text-lg'>
            <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to="/blogs">Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'border-b-3 font-semibold text-black' : ''} to="/dashboard">Dashboard</NavLink>
        </div>
    </>
    return (
        <div>
            <div className='shadow-sm  bg-white fixed top-0 z-100 w-full'>
                <div className="navbar max-w-[90%] mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <div>
                            <img className='w-24' src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        <Link><img className='w-10 rounded-full' src={
                            user ? user.photoURL : userIcon
                        } alt="" /></Link>
                        {
                            user ? <button onClick={handleLogout} className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>Logout</button> : <Link to="/login" className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <LogoutModal isOpen={isModalOpen} ></LogoutModal>
        </div>
    );
};

export default Navbar;