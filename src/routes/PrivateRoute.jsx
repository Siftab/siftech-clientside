import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext);
    console.log(location)
    if(loading){
        return <div className='h-screen w-screen flex justify-center items-center'><DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        /></div>
    }

    if(user)
   { return (
        <div>
            {children}
        </div>
    );}
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;