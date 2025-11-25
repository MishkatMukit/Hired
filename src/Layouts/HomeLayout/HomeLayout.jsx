import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default HomeLayout;