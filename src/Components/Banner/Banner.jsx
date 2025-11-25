import React, { use } from 'react';
import banner from "../../assets/banner.png"
import { AuthContext } from '../../Provider/AuthProvider';
const Banner = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            <div className="relative py-4 mt-10 -z-5  w-full  bg-white">
                {/* Soft Green Glow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
        radial-gradient(circle at center, #8FFFB0, transparent)
      `,
                    }}
                />
                <div className="flex justify-center min-h-screen">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-[200px] md:max-w-xl rounded-lg"
                    />
                    <div>
                        {
                            user && <h1 className='text-2xl font-light mb-2 text-accent'>Welcome back <span className='font-bold'>{user.displayName}</span></h1>
                        }
                        <h1 className="text-3xl md:text-6xl font-bold">Hired - Find The Right Job, Faster</h1>
                        <p className="py-6 text-accent">
                            Discover curated opportunities from trusted companies, compare roles at a glance, and apply with confidence – all in one place on Hired.
                        </p>
                        <button className="btn btn-lg shadow-none text-white btn-secondary">Explore Jobs</button>
                    </div>
                </div>
            </div>
                
            </div>
            
        </div>
    );
};

export default Banner;