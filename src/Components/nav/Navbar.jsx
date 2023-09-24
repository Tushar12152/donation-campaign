import { NavLink } from "react-router-dom";


const Navbar = () => {
  
    return (
        <div>
        <div        className="flex gap-10  flex-col lg:flex-row justify-between items-center w-[90%] mx-auto">
            
             <img className="w-[200px] p-3" src=" https://i.ibb.co/fkcfsQy/Logo.png" alt="" />
             <div className="flex gap-6">
             <NavLink to="/" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }> Home</NavLink>

             <NavLink to="/donation" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Donation</NavLink>


             <NavLink to="/statistics" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Statistics</NavLink>
             </div>
             </div>
        

        
        </div>
    );
};

export default Navbar;