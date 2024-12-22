import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';

const FoodPurchasePri = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }


    return (
        <Navigate to="/auth/login" state={location.pathname} ></Navigate>
    );
};

export default FoodPurchasePri;