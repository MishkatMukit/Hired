import React, { use } from 'react';
import { DataContext } from '../../../Provider/DataProvider';
import Company from './Company';
import { motion } from "motion/react"
import Loading from '../../Loading/Loading'
const Companies = () => {
    const { data } = use(DataContext)
    if (!data || data.length === 0) {
        return <Loading></Loading>
    }
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    
    return (
        <div className='bg-green-50 mt-10 py-16'>
            <div className='max-w-[90%] mx-auto'>
                <div className='text-center pb-10'>
                    <h1 className='text-4xl font-bold text-secondary'>Explore Hiring Companies</h1>
                    <p className='max-w-2xl mx-auto text-md font-medium text-accent'>Find your next workplace from our curated list of companies actively posting jobs on Hired.</p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden" 
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className='grid grid-cols-1 md:grid-cols-4 justify-items-center gap-6'>
                    {
                        data.map(company => (
                            <motion.div
                                key={company.id}
                                variants={itemVariants}
                            >
                                <Company company={company} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Companies;
