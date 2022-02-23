import React from 'react';
import Blogs from "../../Containers/Homepage/Blogs";
import Featured from "../../Containers/Homepage/Featured";
import Banner from "../../Containers/Homepage/Banner";
import Ecosystem from "../../Containers/Homepage/Ecosystem";
import ScrollToTop from "../../components/ScrollTop";
import Focus from "../../Containers/Homepage/Focus";
import Network from "../../Containers/Homepage/Network";
const Homepage = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Ecosystem/>
            <Focus/>
            <Network/>
            <Blogs/>
            <Featured/>
            <ScrollToTop/>
        </React.Fragment>
    );
};

export default Homepage;