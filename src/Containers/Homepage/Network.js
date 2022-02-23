import React from "react";
import Icon from "../../components/Icon";
import mintscan from "../../assets/images/explorers/mintscan.svg";
import hubble from "../../assets/images/explorers/hubble.svg";
import ping from "../../assets/images/explorers/ping.svg";
import aneka from "../../assets/images/explorers/aneka.svg";
import coin98 from "../../assets/images/wallets/coin98.svg";
import keplr from "../../assets/images/wallets/keplr.svg";
import Cosmostation from "../../assets/images/wallets/Cosmostation.svg";
import ledger from "../../assets/images/wallets/ledger.svg";
import pexplorer from "../../assets/images/logos/explorer.svg";
import pwallet from "../../assets/images/logos/wallet.svg";

const Network = () => {
    return (
        <section className="network-section">
            <h3 className="section-title">The Persistence Network</h3>
            <p className="sub-heading">The suite of applications built within the ecosystem is powered by a
                robust and scalable architecture of the Persistence network. </p>
            <div className="container">
                <div className="boxes">
                    <div className="tech-box">
                        <div className="content-container">
                            <p className="heading">technology</p>
                            <p className="content">Persistence is an interoperable protocol that provides developers with the ability to
                                build applications that are either sovereign, modular or built on top of Persistence’s
                                CosmWasm layer
                            </p>
                        </div>
                        <div className="buttons">
                            <a href="https://github.com/persistenceOne/persistenceSDK" rel="noopener noreferrer"
                               target="_blank" className="link">
                               GitHub
                                <Icon viewClass="icon" icon="link-arrow"/>
                            </a>
                            <a href="https://discord.com/invite/qXRmTTGcYD" rel="noopener noreferrer"
                               target="_blank" className="link">
                                Dev Chat
                                <Icon viewClass="icon" icon="link-arrow"/>
                            </a>
                        </div>
                    </div>
                    <div className="box-qoutes">
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
                <div className="tools-container">
                    <h3 className="heading">Tools</h3>
                    <div className="explorers">
                        <p className="title">Explorers</p>
                        <div className="links">
                           <a href="https://explorer.persistence.one/" rel="noopener noreferrer"
                              target="_blank">
                               <img src={pexplorer} alt="pexplorer"/>
                           </a>
                            <a href="https://www.mintscan.io/" rel="noopener noreferrer"
                               target="_blank">
                            <img src={mintscan} alt="mintscan"/>
                            </a>
                            <a href="https://hubble.figment.io/persistence/chains/core-1" rel="noopener noreferrer"
                               target="_blank">
                                <img src={hubble} alt="hubble"/>
                            </a>
                            <a href="https://persistence.aneka.io/" rel="noopener noreferrer"
                               target="_blank">
                            <img src={aneka} alt="aneka"/>
                            </a>
                            <a href="https://ping.pub/persistence" rel="noopener noreferrer"
                               target="_blank">
                            <img src={ping} alt="ping"/>
                            </a>
                        </div>
                    </div>
                    <div className="wallets">
                        <p className="title">Wallets</p>
                        <div className="links">
                            <a href="https://wallet.persistence.one/" rel="noopener noreferrer"
                               target="_blank">
                            <img src={pwallet} alt="pwallet"/>
                            </a>
                            <a href="https://wallet.keplr.app/#/dashboard" rel="noopener noreferrer"
                               target="_blank">
                            <img src={keplr} alt="keplr"/>
                            </a>
                            <a href="https://wallet.cosmostation.io/persistence" rel="noopener noreferrer"
                               target="_blank">
                            <img src={Cosmostation} alt="Cosmostation"/>
                            </a>
                            <a href="https://www.ledger.com/" rel="noopener noreferrer"
                               target="_blank">
                            <img src={ledger} alt="ledger"/>
                            </a>
                            <a href="https://coin98.com/" rel="noopener noreferrer"
                               target="_blank">
                            <img src={coin98} alt="coin98"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
};
export default Network;