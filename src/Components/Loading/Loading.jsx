import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='inset-0 flex w-full justify-center min-h-screen items-center'>
                <span  className="text-secondary  loading loading-bars loading-xl"></span>
            </div>
        </div>
    );
};

export default Loading;