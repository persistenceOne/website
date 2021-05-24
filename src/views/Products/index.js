import React from "react";
import ScrollToTop from "../../components/ScrollTop";
import Animation from "../../Containers/Products/Animation";
import Comdex from "../../Containers/Products/Comdex";
import Pstake from "../../Containers/Products/Pstake";
import Audit from "../../Containers/Products/Audit";
import ComingSoon from "../../Containers/Products/ComingSoon";

const Products = () => {
    return (
        <>
            <Animation/>
            <Comdex/>
            <Pstake/>
            <Audit/>
            <ComingSoon/>
            <ScrollToTop/>
        </>
    )
};
export default Products;