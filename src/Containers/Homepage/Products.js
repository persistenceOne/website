import React from "react";
import {useTranslation} from "react-i18next";
import comdex from '../../assets/images1/logos/comdex_white.svg'
import pstake from '../../assets/images1/logos/pstake_white.svg'
import plend from '../../assets/images1/logos/plend_white.svg'
import assetmantle from '../../assets/images1/mantle_white.svg'
import audit from '../../assets/images1/logos/audit_white.svg'
import Icon from "../../components/Icon";

const Products = () => {
    const {t} = useTranslation();
    return (
        <section className="product-section">
            <div className="container">
                <h3 className="section-title">{t("PRODUCT_SECTION_TITLE")}</h3>
                <p className="section-info">Persistence is building a suite of financial products powered by <br/>
                    blockchain, focusing on both institutional and crypto-native use-cases.</p>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-md-3">
                        <div className="content comdex-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image comdex">
                                </div>
                            </div>



                            <p className="overlay-text">Comdex</p>

                            <div className="">
                                <img className="image-logo" src={comdex} alt="comdex-logo"/>
                                <p className="overlay-subtext">Decentralize Comodity Trade</p>
                            </div>
                            <a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank"
                               className="overlay-learn-more">
                                <p> Learn More </p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content audit-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image audit">
                                </div>
                            </div>
                            <p className="overlay-text">Audit.one</p>
                            <img className="image-logo" src={audit} alt="audit-logo"/>
                            <p className="overlay-subtext">Stake your assets</p>
                            <a href="http://audit.one/" rel="noopener noreferrer" target="_blank"
                               className="overlay-learn-more">
                                <p> Stake Now </p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content pstake-info">
                            <div className="content-overlay"></div>
                            <div className="bg-overlay">
                                <div className="bg-overlay-image pstake">
                                </div>
                            </div>
                            <p className="overlay-text">pStake</p>
                            <img className="image-logo" src={pstake} alt="pstake-logo"/>
                            <p className="overlay-subtext">Unlock Liquidity</p>
                            <div className="overlay-learn-more">
                                <p> Coming Soon </p>
                                <div className="">
                                    <Icon
                                        viewClass="arrow-right"
                                        icon="arrow-right"/>
                                </div>
                            </div>
                            {/*<a href=""  target="_blank" className="overlay-button button"> Learn More <Icon viewClass="arrow-right"*/}
                            {/*                                                     icon="arrow-right"/></a>*/}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="content-multiple">
                            <div className="content  mantle-info mantle-content">
                                <div className="content-overlay"></div>
                                <p className="overlay-text">Asset Mantle</p>
                                <img className="image-logo" src={assetmantle} alt="assetmantle-logo"/>
                                <p className="overlay-subtext coming-soon">Coming soon <span className="dot"></span></p>
                                {/*<a href=""  target="_blank" className="overlay-button button"> Learn More <Icon viewClass="arrow-right"*/}
                                {/*                                                     icon="arrow-right"/></a>*/}
                            </div>
                            <div className="content mantle-info plend-content">
                                <div className="content-overlay"></div>
                                <p className="overlay-text">pLend</p>
                                <img className="image-logo" src={plend} alt="plend-logo"/>
                                <p className="overlay-subtext coming-soon">Coming soon <span className="dot"></span></p>
                                {/*<Button className="overlay-button"> Learn More <Icon viewClass="arrow-right"*/}
                                {/*                                                  icon="arrow-right"/></Button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products;