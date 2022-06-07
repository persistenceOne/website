import React from "react";
import xprtnetwork from '../../assets/images1/xprtnetworks.png';
import gradient from '../../assets/images1/gradientcircle.png';


const Network = () => {
    return (
        <section className="network-section">
            <img src={gradient} alt='gradient' className={'gradient'}/>
            <div className="container">
                    <div className="tech-box">
                        <div className="content-container">
                            <h2 className="heading">Building An Economy Around Proof-of-Stake Assets</h2>
                        </div>
                        <div className={"allassets"}>
                            <img src={xprtnetwork} alt={"network"} title={'Assets'}/>
                        </div>
                </div>
            </div>

        </section>
    )
};
export default Network;