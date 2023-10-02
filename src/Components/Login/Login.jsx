import { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import UseAuthCon from "../../Hooks/UseAuthCon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword,setShowPassword]=useState(true)
    
     const {logIn}=UseAuthCon()
     const navigate=useNavigate()


    const handleLogIn=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            result
            // console.log(result.user)
              navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleLogIn}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword?"password":"text"} name="password" placeholder="password" className="input input-bordered w-full" />
          <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>

         </div>
         <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <i className="text-sm"> <p>New here? go to <Link className="text-blue-400" to='/register'>Register</Link></p></i>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;