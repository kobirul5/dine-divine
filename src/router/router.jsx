import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import AddFood from "../pages/AddFood/AddFood";
import AllFood from "../pages/AllFood/AllFood";
import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addFood",
                element: <AddFood></AddFood>
            },
            {
                path: "/allFood",
                element: <AllFood></AllFood>
            },
            {
                path: "/foodDetails/:id",
                element: <FoodDetails></FoodDetails>
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
    }
])

export default router;