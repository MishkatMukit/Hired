import React, { use, useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import How from '../Components/HomeComponents/How';
import Companies from '../Components/HomeComponents/Companies/Companies';
import { useLoaderData } from 'react-router';
import { DataContext } from '../Provider/DataProvider';
import Services from '../Components/Service/Services';
import { Helmet } from 'react-helmet';


const Home = () => {
    const {setData} = use(DataContext);
    const alldata = useLoaderData()
    useEffect(()=>{
        setData(alldata)
    },[])

    return (
        <div>
            <Helmet>
                <title>Hired | Home</title>
            </Helmet>
            <Banner/>
            <How/>
            <Companies/>
            <Services/>

        </div>
    );
};

export default Home;