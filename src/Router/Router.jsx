import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Blogs/Home/Home";
import Donation from "../Components/Blogs/Donation/Donation";
import Statistics from "../Components/Blogs/Statistics/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";
import DonateDetails from "../Components/Blogs/Home/Home Card/Donate Details/DonateDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Private from "../Private route/Private";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Route></Route>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donate/:id",
                element:<Private>
                    <DonateDetails></DonateDetails>
                        </Private>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donation",
                element:<Private><Donation></Donation></Private>

            },
            {
                path:"/statistics",
                element:<Private><Statistics></Statistics></Private>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default Router;