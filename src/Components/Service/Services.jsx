import React, { useEffect, useState } from 'react';
import Service from './service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("services.json").then(res => res.json()).then(data => setServices(data))
    }, [])
    return (
        <div className='pb-16 '>
            <div className='text-center py-5'>
                <h1 className='text-4xl font-bold text-secondary'>Our Services</h1>
                <p className='max-w-2xl mx-auto text-md font-medium text-accent'>Hired connects talented professionals with leading companies through a streamlined, efficient platform designed for both job seekers and employers.</p>
            </div>
            <div className='flex items-center flex-col md:flex-row gap-10 justify-center'>
                {
                    services.map(service=>(
                        <Service key={service.id} service={service}></Service>
                    ))
                }
            </div>
        </div>

    );
};

export default Services;