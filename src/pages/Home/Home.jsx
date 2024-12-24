import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';
import TopFood from './TopFood';
import HappyClient from './HappyClient';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            <Banner/>
            <TopFood></TopFood>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;