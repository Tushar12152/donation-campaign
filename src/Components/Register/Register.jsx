import { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import UseAuthCon from "../../Hooks/UseAuthCon";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword,setShowPassword]=useState(true)
    const [success,setSuccess]=useState("")
    const [error,setError]=useState(null)
      const {register}=UseAuthCon()
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('')
        setSuccess('')
        // console.log(email,password)
        register(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('wow succesfully registration compleate')

        })
        .catch(error=>{
            console.log(error)
            setError("auth/email-already-in-use")
        })
    }



    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Registration now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleRegister}>
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
        <i className="text-sm"> <p>Already have an account? please <Link className="text-blue-400" to='/login'>Login</Link></p></i>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>

      </form>
      </div>
    </div>
    {success&& <p className="text-4xl font-bold text-green-900">{success}</p>}
    {error&& <p  className="text-4xl font-bold text-red-900">{error}</p>}
  </div>
</div>
        </div>
    );
};

export default Register;