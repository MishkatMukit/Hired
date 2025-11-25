import React from 'react';
import { FaFileInvoiceDollar, FaLocationCrosshairs } from 'react-icons/fa6';
import { IoMdReturnRight } from 'react-icons/io';

const Job = ({job}) => {
    return (
        <div
            key={job.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
            {/* Card Banner Image */}
            <div className="h-40 w-full bg-gray-200 relative z-1">
                <img
                    src={job.bannerImage}
                    alt={job.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                        {job.jobType}
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex gap-1 items-center text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                             <FaFileInvoiceDollar size={14}/>  {job.salary}
                        </span>
                        <span className="flex gap-2 items-center text-gray-500 bg-gray-100 px-2 py-1 rounded">
                           <FaLocationCrosshairs size={14}/>{job.location}
                        </span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {job.description}
                </p>

                {/* Requirements Preview */}
                <div className="mb-6 bg-gray-50 p-4 rounded-lg flex-1">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Key Requirements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <IoMdReturnRight className='text-secondary' size={16} />
                                <span>{req}</span>
                            </li>
                        ))}
                        {job.requirements.length > 3 && (
                            <li className="text-xs text-secondary italic pt-1">
                                + {job.requirements.length - 3} more...
                            </li>
                        )}
                    </ul>
                </div>

                <button className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default Job;