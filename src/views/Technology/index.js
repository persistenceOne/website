import React from "react";
import ScrollToTop from "../../components/ScrollTop";
import Banner from "../../Containers/Technology/Banner";
import Technologies from "../../Containers/Technology/Technologies";
import PersistenceSDK from "../../Containers/Technology/PersistenceSDK";
import AssetMantle from "../../Containers/Technology/AssetMantle";
import Boxes from "../../Containers/Technology/Boxes";
import Tools from "../../Containers/Technology/Tools";
const Technology = () => {
    return (
        <>
            <Banner/>
            <Technologies/>
            <PersistenceSDK/>
            <Boxes/>
            <AssetMantle/>
            <Tools/>
            <ScrollToTop/>
        </>
    )
}
export default Technology;