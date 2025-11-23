import React from 'react';

const How = () => {
    return (
        <div className='max-w-[90%] mx-auto py-10'>
            <div className='text-center py-5'>
                <h1 className='text-4xl font-bold text-secondary'>How Hired Works</h1>
                <p className='max-w-2xl mx-auto text-md font-medium text-accent'>Hired connects talented professionals with leading companies through a streamlined, efficient platform designed for both job seekers and employers.</p>
            </div>

            <div className='w-full'>
                <div className='flex flex-col md:flex-row gap-6 justify-center'>
                    <div className='max-w-xl shadow-lg rounded-xl p-5 border border-secondary  hover:bg-green-100 transition-bg duration-500'>
                        <h1 className='font-semibold text-xl'>For Job Seekers:</h1>
                        <p className='text-accent'>Create a comprehensive profile showcasing your skills and experience, then use advanced search filters to find opportunities matching your location, industry, salary expectations, and job type. Apply with one click using your saved profile, track all applications from a centralized dashboard, and receive real-time notifications when new positions matching your criteria are posted.</p>
                    </div>
                    <div className='max-w-xl shadow-lg rounded-xl p-5 border border-secondary  hover:bg-green-100 transition-bg duration-500'>
                        <h1 className='font-semibold text-xl'>For Employers:</h1>
                        <p className='text-accent'>Post detailed job listings effortlessly, access a diverse pool of qualified candidates, and manage applications through built-in screening tools. Build a compelling company profile to showcase your culture and values, communicate directly with applicants, and monitor recruitment performance with clear analytics.</p>
                    </div>
                </div>
                <div className='p-5 mt-5  shadow-lg rounded-xl border border-secondary hover:bg-green-100 transition-bg duration-500'>
                    <h1 className='font-semibold text-xl'>Why Choose Hired:</h1>
                    <p className='text-accent'>Our mobile-optimized platform saves time with streamlined processes, delivers better matches through smart filtering, and provides complete transparency with application tracking and status updates. Join thousands of professionals and companies finding their perfect match through our user-friendly, cost-effective solution.</p>
                </div>
            </div>
        </div>
    );
};

export default How;