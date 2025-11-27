import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col text-center items-center justify-center h-screen'>
            <Helmet>
                <title>Hired | Error</title>
            </Helmet>
            <div>
                <img className='max-w-[400px]' src="https://i.postimg.cc/MpTf5R4n/error.png" alt="" />
            </div>
            <div className='space-y-3'>
                <div>
                    <h1 className='text-6xl font-extrabold'>404 Error</h1>
                <h3 className='font-medium text-3xl'>Oops! The doctor is not around.</h3>
                </div>
                <div className='text-md font-medium text-[#00000090]'>
                    <p>We tried but couldn't find the page you are looking for.</p>
                    <p>We want to help you the best we can. You are invited to our homepage</p>
                </div>
            </div>
            <Link to="/"><button className='btn btn-lg mt-4 bg-secondary text-white font-bold rounded-full'>Back to Home</button></Link>
        </div>
    );
};

export default Error;