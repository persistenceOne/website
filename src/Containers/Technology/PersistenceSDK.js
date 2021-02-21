import React from "react";
import sdk from "../../assets/images1/sdk.svg";
const PersistenceSDK = () => {
    return (
            <section className="section-sdk">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-section">
                            <p className="sub-text">Built for Web 3.0</p>
                            <h3 className="title">Persistence SDK</h3>
                            <p className="text">The Persistence Software Development Kit (SDK) is a set of standardized
                                modules that can be used to model marketplaces for the easy exchange of value. Modules
                                of the SDK can be integrated into existing applications. Alternatively, the modules can
                                be used in different permutations and combinations to spin up entirely new marketplaces.
                            </p>
                            <div className="button-list">
                                <a href="https://github.com/persistenceOne" className="button-primary button" rel="noopener noreferrer" target="_blank">Github</a>
                                <a href="https://discord.gg/SaBKpjbnhH" className="button-secondary button" rel="noopener noreferrer" target="_blank">Dev Chat</a>
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="logo">
                                <img src={sdk} alt="sdk_logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
};
export default PersistenceSDK;