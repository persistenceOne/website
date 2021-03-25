import React from "react";
import ScrollToTop from "../../components/ScrollTop";

import TokenTitle from "../../Containers/XPRTToken/TokenTitle";
import WhyXPRT from "../../Containers/XPRTToken/WhyXPRT";
import TokenDistribution from "../../Containers/XPRTToken/TokenDistribution";
import Schedule from "../../Containers/XPRTToken/Schedule";
import AcquireXPRT from "../../Containers/XPRTToken/AcquireXPRT";

const Ecosystem = () => {
    return (
        <>
            
            <TokenTitle/>
            <WhyXPRT />
            <TokenDistribution />
            <Schedule />
            <AcquireXPRT />
            <ScrollToTop/>
            
        </>
    )
}
export default Ecosystem;