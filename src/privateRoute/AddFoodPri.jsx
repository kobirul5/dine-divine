import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AddFoodPri = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return children
    }


    return (
        <Navigate to="/auth/login" state={location.pathname} ></Navigate>
    );
};

export default AddFoodPri;