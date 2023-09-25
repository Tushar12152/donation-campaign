import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Blogs/Home/Home";
import Donation from "../Components/Blogs/Donation/Donation";
import Statistics from "../Components/Blogs/Statistics/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";
import DonateDetails from "../Components/Blogs/Home/Home Card/Donate Details/DonateDetails";

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
                element:<DonateDetails></DonateDetails>,
                loader:()=>fetch('/data.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>

            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            }
        ]
    }
])

export default Router;