import { NavLink } from "react-router-dom";
import Banner from "./Banner/Banner";

const Navbar = () => {
    const overlay={
        backgroundColor:'rgba(0,0,0,0.3)'
       
    }
    return (
        <div className="bg-[url('https://i.ibb.co/xDcRXky/images-1.jpg')] bg-no-repeat w-full bg-cover bg-blend-multiply " style={overlay}>
            <div className="flex justify-between items-center w-[90%] mx-auto" >
             <img src=" https://i.ibb.co/fkcfsQy/Logo.png" alt="" />
             <div className="flex gap-6">
             <NavLink to="/" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-400 underline" : "" }> Home</NavLink>

             <NavLink to="/donation" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-400 underline" : "" }>Donation</NavLink>


             <NavLink to="/statistics" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-400 underline" : "" }>Statistics</NavLink>
             </div>

        </div>

        <Banner></Banner>
        </div>
    );
};

export default Navbar;