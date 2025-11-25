import React, { use } from 'react';
import { DataContext } from '../../../Provider/DataProvider';
import Company from './Company';

const Companies = () => {
    const { data } = use(DataContext)
    // console.log("from companies :", data);
    return (
        <div className='bg-green-50 mt-10 py-16'>
            <div className='max-w-[90%] mx-auto'>
                <div className='text-center pb-10'>
                    <h1 className='text-4xl font-bold text-secondary'>Explore Hiring Companies</h1>
                    <p className='max-w-2xl mx-auto text-md font-medium text-accent'>Find your next workplace from our curated list of companies actively posting jobs on Hired.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center gap-6'>
                    {
                        data.map(company => (
                            <Company key={company.id} company={company} ></Company>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Companies;