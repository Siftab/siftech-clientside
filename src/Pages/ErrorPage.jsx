import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
            <img src="https://i.ibb.co/ZTC0PPz/360-F-388638369-w-SBADh-Kfhi-Tx6-Q5-Pz1xfdpy6zotku1-Sg.jpg" alt=""  className='w-screen'/>
            <div className='flex justify-center pb-56'><Link to='/'><button className='btn bg-red-400 '>back Home</button></Link></div>
            
        </div>
    );
};

export default ErrorPage;