import React from "react";
import ScrollToTop from "../../components/ScrollTop";

import TokenTitle from "../../Containers/XPRTToken/TokenTitle";
import WhyXPRT from "../../Containers/XPRTToken/WhyXPRT";
import TokenDistribution from "../../Containers/XPRTToken/TokenDistribution";
import Schedule from "../../Containers/XPRTToken/Schedule";
import CExchanges from "../../Containers/XPRTToken/CExchanges";
import DExchanges from "../../Containers/XPRTToken/DExchanges";

const Ecosystem = () => {
    return (
        <>
            
            <TokenTitle/>
            <WhyXPRT />
            <TokenDistribution />
            <Schedule />
            <CExchanges />
            <DExchanges />
            <ScrollToTop/>
            
        </>
    )
}
export default Ecosystem;