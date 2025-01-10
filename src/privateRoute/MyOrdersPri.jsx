import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import Spinner from '../pages/Share/Spinner';

const MyOrdersPri = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children
    }


    return (
        <Navigate to="/auth/login" state={location.pathname} ></Navigate>
    );
};

export default MyOrdersPri;