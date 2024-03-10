import  { useContext, useState } from 'react';
import { VscEye } from 'react-icons/vsc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const LogIn = () => {
  const location= useLocation()
  const {logInUser}=useContext(AuthContext)
    const [visible,setVisible]=useState(true)
    const [prob,setProb]=useState(null)
    const navigate= useNavigate();
    const handleLogin=e=>{
        e.preventDefault();
        setProb(null)
        const form =e.target;
        const email = form.email.value
        const password = form.password.value
        
        console.log(email,password)
       
        logInUser(email,password)
        .then(res=>{console.log(res.user);  
                        navigate(location.state?  location.state : '/')})
        .catch(err=>{console.log(err)
        setProb(' Email and Password are not matching,try Again...')})
    }
    return (
        <div className='max-w-6xl mx-auto'>
             
             <div className="hero min-h-screen bg-base-200 dark:bg-transparent">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Create your accounts, shop earns points and exciting gifts</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-teal-500 dark:bg-transparent ">
      <form className="card-body "  onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white">Password</span>
          </label>
          <div className='flex items-center'>
            <input className='border p-3 w-full' type={`${visible? 'password':'text'}`} name="password" id="" />
            <span className='absolute right-16' onClick={()=>setVisible(!visible)}><VscEye></VscEye></span>
            </div>
        
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-teal-500">Login</button>
        </div>
        {
          prob && <p className='text-center text-red-600 '>{prob}</p>
        }
        <p className='text-center text-sm'>dont have an Account? <Link to='/signUp' className='text-teal-500 font-semibold text-base'>signUP</Link></p>
      </form>
      
    </div>
  </div>
</div>
           
        </div>
    );
};

export default LogIn;