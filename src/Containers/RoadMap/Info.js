import React from "react";
import establish from "../../assets/images1/establish.svg";
import event_complete from "../../assets/images1/event_complet.svg"
import event_running from "../../assets/images1/event_running.svg"
import event_pending from "../../assets/images1/event_pending.svg"

const Info = () => {
    return (
        <section className="section-roadmap">
            <div className="container">
                <h3 className="title">
                    Roadmap
                </h3>
                <div className="content">
                    <div className="year-section">
                        <div className="left">
                            <h3 className="year-text">2019</h3>
                        </div>
                        <div className="right-section">
                            <div className="quater-section">
                                <div className="quater">
                                    <h3 className="quater-text">Q2</h3>
                                </div>
                                <div className="eventes">
                                    <div className="event">
                                        <img src={establish} alt="establish-img"/>
                                        <p className="event-name establish">Persistence One Established</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Comdex Onboarded <span>DAPP</span></p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
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
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">MVP of Persistence SDK <span>core</span></p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Comdex Testnet Launched <span>DAPP</span></p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
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
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Comdex Completes $10 Millon in Trade
                                            Volume <span>core</span></p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Team Expansion <span>team</span></p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Cosmos India Launched <span>community</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="year-section">
                        <div className="left">
                            <h3 className="year-text">2020</h3>
                        </div>
                        <div className="right-section">
                            <div className="quater-section">
                                <div className="quater">
                                    <h3 className="quater-text">Q1</h3>
                                </div>
                                <div className="eventes">
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Persistence comes out of stealth</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_complete} alt="establish-img"/>
                                        <p className="event-name">Validator Set Expansion </p>
                                    </div>
                                    <div className="event">
                                        <img src={event_running} alt="establish-img"/>
                                        <p className="event-name">Raised funds from Validator/Strategic Investorsd</p>
                                        <p className="present-event ind"><span>We are here!</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="quater-section">
                                <div className="quater">
                                    <h3 className="quater-text">Q2</h3>
                                </div>
                                <div className="eventes">
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">SDK Release v1.0</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">Comdex Completes $30 Million in Trade Volume</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">PoS Validator arm of Persistence, AUDIT.one launched</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">First Set of Advisors onboarded</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">Partnership with Terra established</p>
                                    </div>
                                    <div className="event">
                                        <img src={event_pending} alt="establish-img"/>
                                        <p className="event-name pending">Tendermint delegated 595K ATOMs to AUDIT.one (The largest delegation by Tendermint to any validator)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Info;