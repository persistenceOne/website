import React from "react";
import ScrollToTop from "../../components/ScrollTop";
import Banner from "../../Containers/Ecosystem/Banner";
import Validators from "../../Containers/Ecosystem/Validators";
import Internft from "../../Containers/Ecosystem/Internft";
import Stakedrop from "../../Containers/Ecosystem/Stakedrop";
import Xprt from "../../Containers/Ecosystem/Xprt";
import Faq from "../../Containers/Ecosystem/Faq";
const Ecosystem = () => {
    return (
        <>
            <Banner/>
            <Validators/>
            <Internft/>
            <Stakedrop/>
            <Xprt/>
            <Faq/>
            <ScrollToTop/>
        </>
    )
}
export default Ecosystem;