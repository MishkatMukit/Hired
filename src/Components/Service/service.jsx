import React from 'react';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
const Service = ({ service }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div>

            <div className='space-y-3 p-5 shadow-lg border border-secondary/40 bg-white rounded-xl w-3xs mx-auto' ref={ref}>
                <img className='w-16' src={service.img} alt="" />
                <span className='text-4xl font-extrabold'>{inView && <CountUp className='text-4xl font-extrabold' delay={0} start={0} end={service.count}></CountUp>}
                    +</span>
                <p className='font-semibold text-2xl text-[#0f0f0f70] pt-4'>{service.name}</p>
            </div>
        </div>


    );
};

export default Service;