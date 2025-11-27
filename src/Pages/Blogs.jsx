import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router';
import Blog from '../Components/Blog/Blog';
import { Helmet } from 'react-helmet';
const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className='max-w-[90%] mx-auto mt-16'>
            <ScrollRestoration />
            <Helmet>
                <title>Hired | Blogs</title>
            </Helmet>
            <div className='text-center py-10'>
                    <h1 className='text-4xl font-bold text-secondary'>Read our exclusive blogs </h1>
                    <p className='max-w-2xl mx-auto text-md font-medium text-accent'>Find your next workplace from our curated list of companies actively posting jobs on Hired.</p>
                </div>
            <div className='flex flex-col gap-6 pb-10'>
                {
                    blogs.map(blog=>(
                        <Blog blog={blog}></Blog>
                    ))
                }
            </div>

        </div>
    );
};

export default Blogs;