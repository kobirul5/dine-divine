import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';
import TopFood from './TopFood';
import HappyClient from './HappyClient';
import Reserve from './Reserve';
import Welcome from './Welcome';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div>
            <Banner/>
            <Welcome></Welcome>
            <TopFood></TopFood>
            <Reserve></Reserve>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;