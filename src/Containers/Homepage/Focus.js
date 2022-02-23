import React from "react";
import focus from "../../assets/images/fuel.svg";

const Focus = () => {
    return (
        <section className="focus-section">
            <h3 className="section-title">The Fuel for the Persistence Ecosystem</h3>
            <div className="container">
                <p className="content">
                    <b>XPRT</b> is the native token of the Persistence Network that sits at the absolute centre of the
                    ecosystem deriving significant value as the ecosystem grows.
                </p>
                <div className="image-container">
                    <img src={focus} alt="focus"/>
                </div>
            </div>
        </section>
    )
};
export default Focus;