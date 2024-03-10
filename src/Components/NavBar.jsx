import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [userName,setUserName]=useState('')
    // const [userIMG, setUserIMG]=useState('')
    const path = useLocation();
    // theme works
    const [maintheme,setMainTheme]=useState(localStorage.getItem(false))
    // console.log(theme)

    const links = <>  <NavLink className="px-4" to='/'>Home</NavLink>
        <NavLink className="px-4" to='/addproduct'>Add Product</NavLink>
        <NavLink className="px-4" to='/cart'>MyCart </NavLink>
        
      

    </>
    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res.user))
            .catch(err => console.log(err))

           

    }
    // theme works
    const tooggleTheme=()=>{
        
        const theme =localStorage.getItem('theme');
        if(!theme && theme !=="dark"){
            localStorage.removeItem("theme");
            localStorage.setItem("theme","dark")
        }
        else{
            localStorage.removeItem("theme");
            // localStorage.setItem('theme','light');
        }
        setMainTheme(!maintheme)

    }
    useLayoutEffect(()=>{
        const localTheme= localStorage.getItem('theme');
        document.querySelector("html").setAttribute("data-theme",localTheme)

    },[maintheme])
    return (
        <div className='bg-black '>
            <div className={`md:flex  max-w-7xl pt-7 mx-auto  items-center z-50   relative ${path.pathname === '/' ? 'text-white' : 'text-slate-200'} bg-transparent lg:p-7`} >
            <div className='text-6xl font-bold text-center '>SifTech</div>
            <button className='relative ml-4 lg:ml-10 text-2xl' onClick={tooggleTheme}>{maintheme ?<MdDarkMode></MdDarkMode>:<MdOutlineLightMode></MdOutlineLightMode>}</button>
            <div className='flex justify-between md:flex-1 items-center'>
                <div>
                    <div className='hidden md:flex'>
                        {
                            links
                        }
                    </div>
                    {/* dropdwon */}
                    <details className="dropdown md:hidden">
                        <summary className={`text-4xl m-1 btn bg-transparent border-none text-white `}><HiOutlineMenuAlt2></HiOutlineMenuAlt2></summary>
                        <ul className={`p-2 shadow menu dropdown-content z-[1] ${path.pathname === '/' ? "bg-transparent" : 'bg-slate-600'} rounded-box w-52`}>
                            {links}
                        </ul>
                    </details>
                    
                </div>
                <div className='flex flex-row items-center md:gap-5'>
                    <div>
                        {
                            user && <div className='flex items-center '>
                                <p className='text-right'>

                                    {user?.displayName}
                                </p>
                                <img src={user?.photoURL}

                                    alt="" className='w-12 rounded-full' />


                            </div>
                        }
                    </div>
                    <div>
                        {
                            user ?
                                <button className='btn btn-outline text-red-700 lg:ml-0 ml-24' onClick={handleLogOut}>LogOut</button>
                                :
                                <NavLink className="px-4" to='/login'>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NavBar;