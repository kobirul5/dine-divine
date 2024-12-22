import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            hello
        </div>
    );
};

export default Home;