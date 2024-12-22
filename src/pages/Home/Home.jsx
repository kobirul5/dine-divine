import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const { loading } = useContext(AuthContext)

     // loading
    // if (loading) {
    //     return <div>
    //         <ClipLoader
    //             color={"#FFFF00"}
    //             // loading={loading}
    //             // cssOverride={override}
    //             size={150}
    //             aria-label="Loading Spinner"
    //             data-testid="loader"
    //         />
    //     </div>
    // }
    return (
        <div>
            hello
        </div>
    );
};

export default Home;