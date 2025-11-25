import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FiEdit } from 'react-icons/fi';

const Dashboard = () => {
    const {user} = use(AuthContext)
    console.log(user);
    return (
        <div className='min-h-screen mt-24 max-w-[90%] mx-auto relative'>
            <div className='flex flex-col md:flex-row items-center gap-6  p-10 rounded-xl border border-secondary/20 shadow-lg'>
                <img className='w-40 rounded-full' src={user?.photoURL} alt="" />
                <div className=' text-center md:text-left'>
                    <h1 className='text-2xl font-semibold'>{user?.displayName}</h1>
                    <h1 className='text-accent'>{user?.email}</h1>
                </div>
            </div>
            <button className='cursor-pointer text-secondary absolute top-5 right-5'><FiEdit size={24} /></button>
        </div>
    );
};

export default Dashboard;