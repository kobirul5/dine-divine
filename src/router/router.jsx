import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import AddFood from "../pages/AddFood/AddFood";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails";
import AddFoodPri from "../privateRoute/AddFoodPri";
import MyFood from "../pages/MyFood/MyFood";
import MyFoodPri from "../privateRoute/MyFoodPri";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import MyOrders from "../pages/MyOrders/MyOrders";
import FoodPurchasePri from "../privateRoute/FoodPurchasePri";
import Gallery from "../pages/Gallary/Gallery";
import MyOrdersPri from "../privateRoute/MyOrdersPri";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Dashboard from "../pages/Dashboard/Shared/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import ContactUs from "../pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/abutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/allFood",
                element: <AllFood></AllFood>
            },
            {
                path: "/foodDetails/:id",
                element: <FoodDetails></FoodDetails>
            },
            
            {
                path: "/updateFood/:id",
                element: <UpdateFood></UpdateFood>,
                loader: ({params})=> fetch(`https://assignment-11-server-neon-eta.vercel.app/food/${params.id}`)
            },
            {
                path:"/purchase/:id",
                element: <FoodPurchasePri><FoodPurchase></FoodPurchase></FoodPurchasePri>,
                loader: ({params})=> fetch(`https://assignment-11-server-neon-eta.vercel.app/food/${params.id}`)
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            // admin route
            {
                path: "addFood",
                element: <AddFoodPri><AddFood></AddFood></AddFoodPri>
            },
            {
                path: "myFoods",
                element: <MyFoodPri><MyFood></MyFood></MyFoodPri>
            },
            // users route
            {
                path: "myOrders",
                element: <MyOrdersPri><MyOrders></MyOrders></MyOrdersPri>
            },
        ]
    }
])

export default router;