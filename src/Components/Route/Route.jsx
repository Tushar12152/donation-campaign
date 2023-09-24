import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";

const Route = () => {
    return (
        <div>
             <Navbar></Navbar>
          <div className="w-[90%] mx-auto">
         

            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Route;