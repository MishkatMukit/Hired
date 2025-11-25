import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import Home from '../Pages/Home';
import CompanyDetails from '../Pages/CompanyDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from '../Components/AuthComponents/Login';
import Register from '../Components/AuthComponents/Register';
import Loading from '../Components/Loading/Loading';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children:[
            {
                index:true,
                path:'/',
                element: <Home/>,
                loader: ()=> fetch("/companies.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path:"/blogs",
                element: <h1>this is blogs page</h1>
            },
            {
                path:"/companyDetails/:id",
                element: <PrivateRoute><CompanyDetails/></PrivateRoute>,
                loader: ()=> fetch("/companies.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },
            {
                path: "/dashboard",
                element: <h1>this is dashboard page</h1>
            }
        ]
    }
])

export default router;