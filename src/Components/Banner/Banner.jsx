import React, { use } from 'react';
import banner from "../../assets/banner.png"
import { AuthContext } from '../../Provider/AuthProvider';
import { motion, AnimatePresence } from "motion/react"

const Banner = () => {
    const { user } = use(AuthContext)
    
    return (
        <div>
            <div className="relative py-4 mt-10 -z-5 w-full bg-white">
                {/* Soft Green Glow */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, #8FFFB0, transparent)`,
                    }}
                />
                <div className="flex justify-center mt-10 md:min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={banner}
                                className="max-w-[200px] md:max-w-xl rounded-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Reserve space for welcome message */}
                            <div className="min-h-10 mb-2">
                                <AnimatePresence mode="wait">
                                    {user && (
                                        <motion.h1
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.5 }}
                                            className='text-2xl font-light text-accent'
                                        >
                                            Welcome back <span className='font-bold'>{user.displayName}</span>
                                        </motion.h1>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            <h1 className="text-3xl md:text-6xl font-bold">
                                Hired - Find The Right Job, Faster
                            </h1>
                            <p className="py-6 text-accent">
                                Discover curated opportunities from trusted companies, compare roles at a glance, and apply with confidence – all in one place on Hired.
                            </p>
                            <button className="btn btn-lg shadow-none text-white btn-secondary">
                                Explore Jobs
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
