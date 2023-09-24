import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Blogs/Home/Home";
import Donation from "../Components/Blogs/Donation/Donation";
import Statistics from "../Components/Blogs/Statistics/Statistics";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Route></Route>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
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