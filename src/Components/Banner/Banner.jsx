import React from 'react';
import banner from "../../assets/banner.png"
const Banner = () => {
    return (
        <div>
            <div className="relative py-2 -z-5  w-full  bg-white">
                {/* Soft Green Glow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
        radial-gradient(circle at center, #8FFFB0, transparent)
      `,
                    }}
                />
                <div className="flex justify-center">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-[200px] md:max-w-xl rounded-lg"
                    />
                    <div>
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