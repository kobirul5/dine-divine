import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import Banner from './Banner';
import TopFood from './TopFood';
import HappyClient from './HappyClient';
import Reserve from './Reserve';
import Welcome from './Welcome';
import OnlineOrder from './OnlineOrder';


const Home = () => {
    const { loading } = useContext(AuthContext)

     
    return (
        <div className='space-y-20'>
            <Banner/>
            <TopFood></TopFood>
            <Welcome></Welcome>
            <OnlineOrder></OnlineOrder>
            <Reserve></Reserve>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;