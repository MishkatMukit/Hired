import Job from '../Components/DetailsComp/Job';
import { useLoaderData, useParams } from 'react-router';
import { DataContext } from '../Provider/DataProvider';
import { useEffect, useState } from 'react';
import { FaMapLocationDot, FaTags } from 'react-icons/fa6';
import { MdOutlineSupportAgent } from 'react-icons/md';

const CompanyDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [companyData, setCompanyData] = useState({})

    useEffect(() => {
        const details = data.find(company => company.id == id)

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCompanyData(details)
    }, [data, id])

    return (
        <div className="min-h-screen w-full relative">
            {/* Teal Glow Left */}
            <div
                className="absolute inset-0 -z-1"
                style={{
                    background: "#ffffff",
                    backgroundImage: `
        radial-gradient(
          circle at bottom left,
          rgba(143, 255, 176, 0.5),
          transparent 70%
        )
      `,
                    filter: "blur(80px)",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {/* Your Content/Components */}
            <div className="min-h-screen relative  pt-20 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* --- Section 1: Company Profile Header --- */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-10 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-100">
                        <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-full p-2 border border-gray-200">
                            <img
                                src={companyData.logo}
                                alt={`${companyData.name} logo`}
                                className="w-full h-full rounded-full object-contain"
                            />
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl font-bold text-gray-900">{companyData.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2 text-sm text-gray-600">
                                <span className="flex  items-center gap-1">
                                    <FaMapLocationDot size={18} /> {companyData.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaTags size={18} />{companyData.industry}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <a
                                href={companyData.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                    {/* --- Section 2: Jobs Grid (Separate Items) --- */}
                    <div className="mb-6 relative z-1">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">
                            Available Positions ({companyData.jobs?.length})
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {
                                companyData.jobs?.map((job) => (
                                    <Job key={job.id} job={job}></Job>
                                ))}
                        </div>
                    </div>

                </div>'

            </div>
        </div>

    );
};

export default CompanyDetails;
