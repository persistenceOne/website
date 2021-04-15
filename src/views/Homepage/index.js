import React from 'react';
import Products from "../../Containers/Homepage/Products";
import Aims from "../../Containers/Homepage/Aims";
import Backers from "../../Containers/Homepage/Backers";
import Blogs from "../../Containers/Homepage/Blogs";
import Featured from "../../Containers/Homepage/Featured";
import Banner from "../../Containers/Homepage/Banner";
import ScrollToTop from "../../components/ScrollTop";

const Homepage = () => {
    return (
        <React.Fragment>
            <Banner/>
            <Products/>
            <Aims/>
            <Backers/>
            <Blogs/>
            <Featured/>
            <ScrollToTop/>
        </React.Fragment>
    );
};

export default Homepage;