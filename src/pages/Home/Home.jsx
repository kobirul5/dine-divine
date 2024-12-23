import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            <Banner/>
        </div>
    );
};

export default Home;