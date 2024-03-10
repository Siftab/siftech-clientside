import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ScrollTop from '../Utils/ScrollTop';
import Footer from '../Components/Footer';


const Root = () => {
   ScrollTop();
//    
  
    return (
        <div className='font-fontgero bg-base-200  '>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;