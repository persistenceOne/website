import React from 'react';
import Blogs from "../../Containers/Homepage/Blogs";
import Joinus from "../../Containers/Homepage/Joinus";
import Banner from "../../Containers/Homepage/Banner";
import Ecosystem from "../../Containers/Homepage/Ecosystem";
import Network from "../../Containers/Homepage/Network";
import XprtEcosystem from "../../Containers/Homepage/XPRTEcosystem";
const Homepage = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Ecosystem/>
            <Network/>
            <XprtEcosystem />
            <Joinus/>
            <Blogs/>
        </React.Fragment>
    );
};

export default Homepage;