import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';


const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;