import React from "react";
import BackersTabs from "../../components/backers";
import {useTranslation} from "react-i18next";

const Network = () => {
    const {t} = useTranslation();
    return (
        <section className="network-section">
            <h3 className="section-title">The Persistence Network</h3>
            <p className="sub-heading">The suite of applications built within the ecosystem is powered by a
                robust and scalable architecture of the Persistence network. </p>
            <div className="container">
                <div className="boxes">
                    <div className="col-md-6 tech-box">
                        <div className="content-container">
                            <p className="heading">technology</p>
                            <p className="content">Persistence is an interoperable protocol that provides developers with the ability to
                                build applications that are either sovereign, modular or built on top of Persistence’s
                                CosmWasm layer
                            </p>
                        </div>
                        <div className="buttons">
                            <a href="" className="button button-primary">
                               GitHub
                            </a>
                            <a href="" className="button button-primary">
                                Dev Chat
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="qoutes">
                            <div className="qoute">
                                <p>Build App-chains within the Persistence Ecosystem that are interoperable with the
                                    Cosmos/IBC ecosystem and route IBC assets through Persistence Core-1 chain </p>
                            </div>
                            <div className="qoute">
                                <p>Build Modular Apps directly on top of the Core-1 chain, using components of the
                                    Persistence architecture as plug-and-play interfaces</p>
                            </div>
                            <div className="qoute">
                                <p>Build high-performance and easily upgradable Smart Contract Apps on Persistence
                                    chain with the integration of CosmWasm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Network;