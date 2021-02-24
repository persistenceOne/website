import React from "react";
import Icon from "../../components/Icon";
import square from "../../assets/images1/float_blocks/square.svg";
import circle from "../../assets/images1/float_blocks/circle.svg";
import triangle from "../../assets/images1/float_blocks/triangle.svg";

const Aims = () => {
    return (
        <section className="aim-section">
            <h3 className="section-title"> What are our focuses?</h3>
            <div className="container">
                <div className="row row-margin-nft">
                            <div className="col-md-12 col-lg-6 img-section">
                                <img src={square} alt="square" className="square"/>
                                <img src={circle} alt="circle" className="circle"/>
                                <img src={triangle} alt="triangle" className="triangle"/>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="services-list">
                                    <div className="serial">
                                        <p>01</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="accessibility" icon="defi"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">Decentralized Finance (DeFi)</h5>
                                            <p className="pt-2">Enabling users to interact with both traditional and digital assets in an open and global context.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-list">
                                    <div className="serial">
                                        <p>02</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="liquidity" icon="nft"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">Non-Fungible Token (NFT)</h5>
                                            <p className="pt-2">Making real-world and digital assets, such as invoices, collectibles and art, more accessible.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-list sustain">
                                    <div className="serial">
                                        <p>03</p>
                                    </div>
                                    <div className="serviceBody">
                                        <div className="icon-section">
                                        <Icon viewClass="sustainability" icon="pos"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="primary-white-color">Proof-of-Stake (PoS)</h5>
                                            <p className="pt-2">Creating products to generate opportunities and address challenges around the novel PoS consensus mechanism in a multi-chain environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
};
export default Aims;