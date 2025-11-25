import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import Home from '../Pages/Home';
import CompanyDetails from '../Pages/CompanyDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from '../Components/AuthComponents/Login';
import Register from '../Components/AuthComponents/Register';
import Loading from '../Components/Loading/Loading';
import Dashboard from '../Pages/Dashboard';
import Blogs from '../Pages/Blogs';


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
                element: <Blogs/>,
                loader: ()=>fetch("/blogs.json")
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
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            }
        ]
    }
])

export default router;