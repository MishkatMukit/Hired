import React from 'react';
import { Link } from 'react-router';
import {motion} from 'motion/react'

const Company = ({ company }) => {
    return (
        <div >
            <motion.div
                whileHover={{y:-10, scale:1.0005}}
                animate={{y:0, scale:0.94}}
            className="w-[300px] md:w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                {/* Company Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-20 h-20 object-cover"
                    />
                </div>

                {/* Company Name */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                    {company.name}
                </h3>

                {/* Industry */}
                <p className="flex-4 text-sm text-gray-600 text-center mb-4">
                    {company.industry}
                </p>
                </div>

                {/* Jobs Available */}
                <div className="text-center mb-6">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {company.jobs.length} {company.jobs.length === 1 ? 'Job' : 'Jobs'} Available
                    </span>
                </div>

                {/* View Details Button */}
                <Link to={`/companyDetails/${company.id}`}><motion.button
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                className="w-full bg-secondary hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    View Details
                </motion.button></Link>
            </motion.div>
        </div>
    );
};

export default Company;