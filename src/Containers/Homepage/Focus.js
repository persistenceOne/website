import React from "react";
import xprt from "../../assets/images/xprt.svg";

const Focus = () => {
    return (
        <section className="focus-section">
            <h3 className="section-title">The Fuel for the Persistence Ecosystem</h3>
            <div className="container">
                <div className="image-container">
                    <img src={xprt} alt="xprt"/>
                    <p>XPRT</p>
                </div>
                <p className="content">
                    XPRT is the native token of the Persistence Network that sits at the absolute centre of the
                    ecosystem deriving significant value as the ecosystem grows.
                </p>
            </div>
        </section>
    )
};
export default Focus;