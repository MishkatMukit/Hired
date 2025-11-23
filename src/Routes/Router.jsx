import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import Home from '../Pages/Home';
import CompanyDetails from '../Pages/CompanyDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children:[
            {
                index:true,
                path:'/',
                element: <Home/>,
                loader: ()=> fetch("/companies.json")
            },
            {
                path:"/blogs",
                element: <h1>this is blogs page</h1>
            },
            {
                path:"/companyDetails/:id",
                element: <CompanyDetails/>
            },
            {
                path: "/dashboard",
                element: <h1>this is dashboard page</h1>
            }
        ]
    }
])

export default router;