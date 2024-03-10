import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ShowBrand from "../Pages/ShowBrand";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/MyCart";
import UpdateProduct from "../Pages/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage";

export const myRoutes=createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:([
            {
                path:'/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
            ,{
                path:'/cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
                ,loader: ()=>fetch('https://project-server-rouge-ten.vercel.app/cartData')

            }
            ,{
                path:'/',
                element: <Home></Home>

            }
            ,{
                path:'/login',
                element: <LogIn></LogIn>

            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>

            },
            {
                path:'/brand/:name',
                element: <ShowBrand></ShowBrand>,
                loader:({params})=>fetch(`https://project-server-rouge-ten.vercel.app/brand/${params.name}`)

            }
            ,{
                path:'/productDetails/:id'
                ,element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://project-server-rouge-ten.vercel.app/productDetails/${params.id}`)
            },
            {
                path:'/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`https://project-server-rouge-ten.vercel.app/productDetails/${params.id}`)
            }
        ])
    }
])