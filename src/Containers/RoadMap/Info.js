import React from "react";
import establish from "../../assets/images1/establish.svg";
import event_complete from "../../assets/images1/event_complet.svg"
import event_running from "../../assets/images1/event_running.svg"
import event_pending from "../../assets/images1/event_pending.svg"
import Icon from "../../components/Icon";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Info = () => {
    return (
        <section className="section-roadmap">
            <div className="container">
                <h3 className="title">
                    Roadmap
                </h3>
                <div className="content">
                    <Tabs defaultActiveKey="2020" id="uncontrolled-tab-example">
                        <Tab eventKey="2019" title="2019">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={establish} alt="establish-img"/>
                                            <p className="event-name establish">Persistence One Established</p>
                                            <div className="hover-blog">
                                                <img className="event-status-img blog-image" alt="blog2"
                                                     src="https://miro.medium.com/max/1000/1*GiRBfno3sWdPEdLaeqHpQQ.png"/>
                                                <div className="blog-info">
                                                    <div className="medium-icon">
                                                        <Icon viewClass="social_icon_imgg" icon="medium-m"/>
                                                    </div>
                                                    <p>
                                                        Introducing Persistence — Focus on ‘Real-World’ Adoption!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Onboarded <span>DAPP</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Cross-border Transaction PoC
                                                Completed <span>DAPP</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">MVP of Persistence SDK <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Testnet Launched <span>DAPP</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">First Set of Validators
                                                Onboarded <span>ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Comdex Completes $10 Millon in Trade
                                                Volume <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Team Expansion <span>team</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Cosmos India Launched <span>community</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2020" title="2020">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Persistence comes out of stealth</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Validator Set Expansion </p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">Raised funds from Validator/Strategic
                                                Investors</p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="present-img event-status-img" src={event_running}*/}
                                        {/*         alt="establish-img"/>*/}
                                        {/*    <div className="circle event-status-img"></div>*/}

                                        {/*    <p className="event-name">Raised funds from Validator/Strategic*/}
                                        {/*        Investors </p>*/}

                                        {/*    <p className="present-event ind"><span>We are here!</span></p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">SDK Release v1.0</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Comdex Completes $30 Million in Trade
                                                Volume</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">PoS Validator arm of Persistence,
                                                AUDIT.one
                                                launched</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">First Set of Advisors onboarded</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Partnership with Terra established</p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Tendermint delegated 595K ATOMs to
                                                AUDIT.one
                                                (The largest delegation by Tendermint to any validator)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q3</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">SDK Open-sourced <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Protocol Paper Released
                                                v1 <span>core</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Persistence raises $3.7 Million in Private
                                                Fundraise</p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete}*/}
                                        {/*         alt="event_complete-img"/>*/}
                                        {/*    <p className="event-name">Onboarded Jeffery Hu as*/}
                                        {/*        Advisor <span>Team</span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Interchain Foundation awarded Persistence
                                                a Grant for developing Interchain Standards for NFT and
                                                Metadata <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete}
                                                 alt="event_complete-img"/>
                                            <p className="event-name">Partnership with
                                                Matic <span>Ecosystem</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q4</h3>
                                    </div>
                                    <div className="eventes">
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Hosted HackAtom India <span>Ecosystem</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Partnership with Razor Network
                                                established <span>Ecosystem</span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="event_complete-img"/>*/}
                                        {/*    <p className="event-name">Tendermint Delegated 595K ATOMs to Persistence Validator, AUDIT.one <span>Ecosystem</span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Launched StakeDrop Campaign for 7 Networks; Fist being Cosmos StakeDrop <span>Token</span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Comdex Incentivised Testnet Launch <span>dapp</span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="event_complete-img"/>*/}
                                        {/*    <p className="event-name">Kava StakeDrop <span>Token</span></p>*/}
                                        {/*</div>*/}
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="event_complete-img"/>*/}
                                        {/*    <p className="event-name">Terra StakeDrop <span>Token</span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="event_complete-img"/>
                                            <p className="event-name">Expanded Team to 20+ Members <span>Team</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="2021" title="2021">
                            <div className="right-section">
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q1</h3>
                                    </div>
                                    <div className="eventes">
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="establish-img"/>*/}
                                        {/*    <p className="event-name">Matic StakeDrop Launch <span>Token</span></p>*/}
                                        {/*</div>*/}
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="establish-img"/>*/}
                                        {/*    <p className="event-name">Token Utility Paper  <span>Token</span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_complete} alt="establish-img"/>
                                            <p className="event-name">interNFT: Publish Technical Specifications <span>Core</span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_complete} alt="establish-img"/>*/}
                                        {/*    <p className="event-name">TBD Program Launch <span>Community</span></p>*/}
                                        {/*</div>*/}

                                        <div className="event">
                                            <img className="present-img event-status-img" src={event_running}
                                                 alt="establish-img"/>
                                            <div className="circle event-status-img"></div>

                                            <p className="event-name">Protocol Paper Release v2</p>

                                            <p className="present-event ind"><span>We are here!</span></p>
                                        </div>


                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name">Token Economics Release <span>Token </span></p>*/}
                                        {/*</div>*/}
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Asset Mantle Testnet  <span>Core </span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Persistence ETH Bridge Live (pBridge)  <span>dapp </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Token Contract Audit  <span>Token </span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Persistence dApp Litepaper <span>dapp </span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">TGE <span>Token </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">pStake Application Launch <span>dapp </span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Irisnet StakeDrop <span>Token </span></p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="quater-section">
                                    <div className="quater">
                                        <h3 className="quater-text">Q2</h3>
                                    </div>
                                    <div className="eventes">
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Ambassador Program Launch <span>Community </span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">interNFT implementation v1.0 <span>Core </span></p>
                                        </div>
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Polkadot StakeDrop <span>Token  </span></p>*/}
                                        {/*</div>*/}
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">Tezos StakeDrop <span>Token  </span></p>*/}
                                        {/*</div>*/}
                                        {/*<div className="event">*/}
                                        {/*    <img className="event-status-img" src={event_pending} alt="event_pending-img"/>*/}
                                        {/*    <p className="event-name pending">dapp Beta Release <span>dapp  </span></p>*/}
                                        {/*</div>*/}
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">SDK release v2.0 <span>Core  </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Persistence Alpha Testnet <span>Core  </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Block Explorer v1.0 <span>Core  </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Validator Set Expansion <span>Ecosystem  </span></p>
                                        </div>
                                        <div className="event">
                                            <img className="event-status-img" src={event_pending} alt="event_pending-img"/>
                                            <p className="event-name pending">Community Bounty Program  <span>Community  </span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
export default Info;