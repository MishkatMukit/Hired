import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FiEdit } from 'react-icons/fi';
import { div } from 'motion/react-client';
import { MdCancel } from 'react-icons/md';

const Dashboard = () => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const handleEdit = () => {
        setIsEditOpen(true)
    }
    const handleUpdateUser = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        updateUser({ displayName: name, photoURL: photoUrl }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photoUrl });
                setIsEditOpen(false)
            }).catch(error=> console.log(error))
    }
    const { user,updateUser, setUser } = use(AuthContext)
    console.log(user);
    return (
        <div className='min-h-screen mt-24 max-w-[90%] mx-auto relative'>
            <div>
                <div className='flex flex-col md:flex-row items-center gap-6  p-10 rounded-xl border border-secondary/20 shadow-sm'>
                    <img className='w-40 h-40 object-cover rounded-full' src={user?.photoURL} alt="" />
                    <div className=' text-center md:text-left'>
                        <h1 className='text-2xl font-semibold'>{user?.displayName}</h1>
                        <h1 className='text-accent'>{user?.email}</h1>
                    </div>
                </div>
                <button onClick={handleEdit} className='cursor-pointer text-secondary absolute top-5 right-5'><FiEdit size={24} /></button>
            </div>
            {/* modal */}
            <div className='relative'>
                {
                    isEditOpen && <div className="bg-white shadow-sm border border-secondary/20 rounded-lg mt-6">
                        <div className='p-10 rounded-lg bg-white relative'>
                            <button onClick={() => setIsEditOpen(false)} className='text-red-700 absolute top-2 right-2'><MdCancel size={24} /></button>
                            <h1 className='text-xl mb-5 font-bold'>Update Profile</h1>
                            <form onSubmit={handleUpdateUser} className='flex gap-1 items-center flex-col md:flex-row'>
                                <div className='w-full'>
                                    <p className='text-accent text-sm'>Name</p>
                                    <input defaultValue={user.displayName} className="input w-full" name="name" type="text" />
                                </div>
                                <div className='w-full'>
                                    <p className='text-accent text-sm'>Photo-Url</p>
                                <input defaultValue={user.photoURL} className="input w-full" name="photoUrl" type="text" /> 
                                </div>
                                <div className=''> 
                                    <input type="submit" value="Update" className=' mt-2 btn shadow-none btn-secondary text-white' />
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;