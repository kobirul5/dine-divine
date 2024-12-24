import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';
import TopFood from './TopFood';
import HappyClient from './HappyClient';
import Reserve from './Reserve';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            <Banner/>
            <TopFood></TopFood>
            <HappyClient></HappyClient>
            <Reserve></Reserve>
        </div>
    );
};

export default Home;