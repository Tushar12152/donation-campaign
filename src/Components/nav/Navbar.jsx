import { NavLink, useNavigate } from "react-router-dom";
import UseAuthCon from "../../Hooks/UseAuthCon";


const Navbar = () => {
    const navigate=useNavigate()
    const {user,logout}=UseAuthCon()
    // console.log("nav7",user)
    const handleLogOut=()=>{
        logout()
       navigate('/login')
    }
  
    return (
        <div  className="flex flex-row">
        <div        className="flex gap-10 flex-col lg:flex-row justify-between items-center w-[90%] mx-auto">
            
             <img className="w-[200px] p-3" src=" https://i.ibb.co/fkcfsQy/Logo.png" alt="" />
             <div className="flex gap-6">
             <NavLink to="/" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }> Home</NavLink>

             <NavLink to="/donation" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Donation</NavLink>


             <NavLink to="/statistics" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Statistics</NavLink>

             <NavLink to="/login" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Login</NavLink>

             <NavLink to="/register" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>Register</NavLink>
             </div>
           <div>
           { user?<div className="flex items-center justify-center gap-2"> 
               <div className="flex flex-row-reverse gap-4">
               <img className="w-10 rounded-full bg-slate-600" src={user?.photoURL} alt="" />
               <p>{user.email}</p>
               </div>
                
                <button onClick={handleLogOut} className="btn btn-group">Sign Out</button>
            </div>:<></>}
           </div>

             </div>
        

        
        </div>
    );
};

export default Navbar;