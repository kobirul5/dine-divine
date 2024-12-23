import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';
import TopFood from './TopFood';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            <Banner/>
            <TopFood></TopFood>
        </div>
    );
};

export default Home;