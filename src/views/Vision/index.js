import React from "react";
import Particles from "../../components/Particles";
import Banner from "../../Containers/Vision/Banner";
import Boxes from "../../Containers/Vision/Boxes";
import Team from "../../Containers/Vision/Team";
import Advisors from "../../Containers/Vision/Advisors";
import ScrollToTop from "../../components/ScrollTop";

const Vision = () => {
    return (
        <>
            <div>
                <div>
                    <Banner/>
                </div>
                <Particles/>
            </div>
            <Boxes/>
            <Team/>
            <Advisors/>
           <ScrollToTop/>
        </>
    )
}
export default Vision;