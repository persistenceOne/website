import React from "react";
import cointelegraph from "../../assets/images1/featured/CT.png";
import financemagnet from "../../assets/images1/featured/FM.png";
import chainnews from "../../assets/images1/featured/chainnews.png";
import dsa from "../../assets/images1/featured/dsa.png";
import e27 from "../../assets/images1/featured/e27.png";
import blockbeats from "../../assets/images1/featured/blockbeats.png";
import odaily from "../../assets/images1/featured/Odaily.svg";
import Image from "../../components/elements/Image";
import {useTranslation} from "react-i18next";
const Featured = () => {
    const {t} = useTranslation();
    return (
        <section className="featured-on">
            <h3 className="section-title">{t("FEATURED_ON_SECTION_TITLE")}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logos">
                            <a href="https://cointelegraph.com/news/blockchain-interoperability-the-holy-grail-for-cross-chain-deployment"
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img" src={cointelegraph} alt="Cointelegraph"/>
                            </a>
                            <a href="https://www.coindesk.com/staking-as-an-asset-class-this-swiss-institutional-fund-is-jumping-in" target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <Image
                                    src={require('../../assets/images1/featured/coindesk01.png')}
                                    alt="Coindesk"
                                />
                            </a>

                            <a href="https://www.financemagnates.com/cryptocurrency/news/all-eyes-on-india-as-supreme-court-crypto-case-advances/"
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                  src={financemagnet}
                                  alt="Finance Magnates"/>
                            </a>
                            <a href="https://www.chainnews.com/articles/444783600555.htm" target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={chainnews}
                                     alt="ChainNews"/>
                            </a>
                            <a href="https://www.dealstreetasia.com/stories/x-zell-persistence-211639/"
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                    <img className="logo-img"
                                         src={dsa}
                                         alt="dsa"/>
                                </a>
                            <a href="https://e27.co/techcrunch-founders-vc-firm-leads-us3-7m-in-ex-golden-gate-employees-blockchain-startup-persistence-20201015/"
                               target="_blank" rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={e27}
                                     alt="e27"/>
                            </a>
                            <a href="https://www.theblockbeats.com/news/20422" target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={blockbeats}
                                     alt="blockbeats"/>
                            </a>
                            <a href="https://www.odaily.com/newsflash/238810" target="_blank"
                               rel="noopener noreferrer" data-aos="fade" data-aos-duration="1000">
                                <img className="logo-img"
                                     src={odaily}
                                     alt="odaily"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Featured;