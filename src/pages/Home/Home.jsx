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
            <TopFood></TopFood>
            <Welcome></Welcome>
            <HappyClient></HappyClient>
            <Reserve></Reserve>
        </div>
    );
};

export default Home;