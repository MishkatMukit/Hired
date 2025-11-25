import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const LogoutModal = ({isOpen}) => {
    const {logoutUser, setIsModalOpen} = use(AuthContext)
    const handleConfirmLogout=()=>{
        logoutUser()
        setIsModalOpen(false)
    }
    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000040]">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Confirm Logout
                </h3>
                <p className="text-gray-600 mb-6">
                    Are you sure you want to logout?
                </p>
                <div className="flex justify-end space-x-4">
                    <button onClick={()=>setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
                    >
                        Cancel
                    </button>
                    <button onClick={handleConfirmLogout}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition duration-300"
                    >
                        Yes, Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;