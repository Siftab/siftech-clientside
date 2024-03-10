import React, { useContext, useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Providers/Authprovider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';


const SignUp = () => {
    const [img,setImg]=useState('')
    
    const [visible,setVisible]=useState(true);
    const [prob,setProb]=useState(null)
    const navigate =useNavigate();
    const {user ,createUser,GoogleSignUp,SetUser}=useContext(AuthContext);
    const handleGoogleSignUp=()=>{
        GoogleSignUp()
        .then(res=>{ console.log(res.user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User has been created",
                showConfirmButton: false,
                timer: 1500
                 });
                 navigate('/')
            })
        .catch(err=>console.log(err))
    
    }


    const handleSignUp=e=>{
        e.preventDefault();
        setProb(null)
        const form= e.target;
        const email =form.email.value;
        const password= form.password.value;
        const  imgURL = form.imgURL.value;
        const name = form.name.value;
        const chkBox = form.checkbox.checked
        const newUser={name,email,password,imgURL}
        console.log(newUser)
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password)){
            return setProb('your password must 6digit , have one capital letter and one special charecters')
}
        if(!chkBox){
            return setProb('please accept terms & condition')
          }
        createUser(email,password)
        .then(res=>{console.log(res.user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User has been created",
                showConfirmButton: false,
                timer: 1500
              });
            //   user.photoURL=res?.user?.photoURL;
            setImg(res.user)
              updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: imgURL
              })
              .then(res=>{console.log(res)
                SetUser({...user, displayName: name,
                    photoURL: imgURL}) })
              .catch(err=>console.log(err))
              fetch('https://project-server-rouge-ten.vercel.app/user',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(newUser)
              })
              .then(res=>res.json())
              .then(data=>console.log(data))

              navigate('/')
                        })

        .catch(err=>
            {console.log(err);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${err.code}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
                                })

                                
    }


console.log(img)
    return (
        <div
        className='max-w-6xl mx-auto lg:h-screen md:flex md:items-center '
        >
         <div className='md:w-1/2  bg-transparent mx-4 md:mx-auto border border-teal-500 rounded-lg dark:bg-transparent'>
            <h1 className='text-center py-6 text-4xl font-semibold'>Sign Up</h1>
         <form className='w-full  p-6 ' onSubmit={handleSignUp}>
            <label htmlFor="name"><p>Name</p></label>
            <input className='border p-3 w-full' type="text" name="name" id="name" />
            <br />
            <label htmlFor="imgURL"><p>Image Url</p></label>
            <input className='border p-3 w-full' type="text" name="imgURL" id="imgURL" />
            <br />
            <label htmlFor="email"><p>Email</p></label>
            <input className='border p-3 w-full' type="email" name="email" id="email" />
            <br />
            <label htmlFor="password"><p>password</p></label>
            <div className='flex items-center relative'>
            <input className='border p-3 w-full' type={`${visible? 'password':'text'}`} name="password" id="password" />
            <span className='absolute right-10' onClick={()=>setVisible(!visible)}><VscEye></VscEye></span>
            </div>
            <div className='flex gap-3 items-center'>
            <input  type="checkbox" name="checkbox" id="" />
            <p> accept our terms and conditions</p>
        </div>
            
            <button type='submit' className='btn w-full  bg-teal-500 mt-5'>Submit</button>

            {
                prob && <p className='text-center my-4 text-rose-600'>{prob}</p>
            }

            
         </form>
         <p className='text-center'>Already have an Account ? <Link to='/logIn' className='text-teal-500 text-base font-semibold'>LogIn</Link></p>
            <p className='text-center'>or</p>
<div className="flex justify-center">
            <button className='btn btn-outline my-10 ' onClick={handleGoogleSignUp}>SignUp with <FcGoogle/></button>
</div>
         </div>
        </div>
    );
};

export default SignUp;