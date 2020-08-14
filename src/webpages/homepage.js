import React, { Component } from 'react';
import Header from './components/header';
import MailChimp from './components/mailChimp'
import Products from './components/products'
import Slider from './components/slider'
import Footer from './components/footer'
import proudctBg from '../assets/product_bg.jpg'
import validator from '../assets/validator.svg'
import nfts from '../assets/nfts.png'
import colloterals from '../assets/colloterals.png'
import liquidpools from '../assets/liquidpools.png'
import whitepaper from '../whitepaper.pdf'
import Icon from './icon';


class homePage extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('nav-bar').classList.add('navbar-white');
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                {/* Products Section */}
                <section className="section-1 bg-product product-padding" id="home" data-image-src={proudctBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text-white mobile-head">
                                <h1 className="title">Protocol Powering Institutional Decentralized Finance</h1>
                                <p className="sub-title title-line">Persistence bridges DeFi and Traditional Finance by
                                 facilitating borrowing of Cryptoassets using Real-world assets as collateral</p>
                                 <div className="col-lg-12">
                                <div className="row text-muted mob-text-align">
                                    <ul className="list-unstyled first-section-social-icons">
                                    <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Announcements"><li><Icon viewClass="social_icon_imgg" icon="telegram-plane" /></li></a>
                                    <a href="https://t.me/PersistenceOneChat" rel="noopener noreferrer" target="_blank" title="Community Chat"><li><Icon viewClass="social_icon_imgg" icon="telegram-plane" /></li></a>
                                    <a href="https://github.com/persistenceOne" rel="noopener noreferrer" target="_blank" title="Github"> <li> <Icon viewClass="social_icon_imgg" icon="github-alt" /></li></a>
                                    <a href="https://www.linkedin.com/company/persistenceone/" rel="noopener noreferrer" target="_blank" title="LinkedIn"><li><Icon viewClass="social_icon_imgg" icon="linkedin" /></li></a>
                                    <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Twitter"><li><Icon viewClass="social_icon_imgg" icon="twitter-logo" /></li></a>
                                    <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" title="Medium"><li><Icon viewClass="social_icon_imgg" icon="medium-m" /></li></a>
                                    <span className="line"></span>
                                    <a href={whitepaper} target="_blank" rel="noopener noreferrer" title="Whitepaper"><li className="whitepaper"><Icon viewClass="social_icon_imgg" icon="whitepaper" />Whitepaper</li></a>
                                    </ul>
                                </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="sub-section">
                    <div className="container">
                        <div className="row">
                            <div className="margin-t-20 col-lg-4">
                                <div className="services-list">
                                    <div className="media">
                                        <img className="sub-service-icons" src={nfts} alt="nfts" />
                                        <div className="media-body ml-4">
                                            <h5>Asset Tokenization</h5>
                                            <p className="pt-2">Tokenize real-world assets using NFTs to bring them on-chain into the DeFi ecosystem</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="margin-t-20 col-lg-4">
                                <div className="services-list">
                                    <div className="media">
                                        <img className="sub-service-icons" src={colloterals} alt="colloterals" />
                                        <div className="media-body ml-4">
                                            <h5>Asset Exchange</h5>
                                            <p className="pt-2">Cross-chain exchange of crypto and real-world assets (NFT marketplaces)</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="margin-t-20 col-lg-4">
                                <div className="services-list">
                                    <div className="media">
                                        <img className="sub-service-icons" src={liquidpools} alt="liquidpools" />
                                        <div className="media-body ml-4">
                                            <h5>Liquidity Aggregation</h5>
                                            <p className="pt-2">Invest/lend to a variety of diversified real-world asset backed Stablecoin liquidity pools</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="section-slider" id="products">
                    <h3>Products</h3>
                    <div className="container">
                        <div className="row head-slider">
                            <Slider />
                        </div>

                    </div>
                </section>
                <Products />

                <section className="validators-section" id="validators">
                    <h3>Validators</h3>
                    <div class="container">
                        <img className="img-width" src={validator} alt="validator" title="validator" />
                    </div>
                    <p>Selected list of top validators in our ecosystem</p> <p className="second-p">secure more than US $700M worth of assets collectively</p>
                </section>

                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Join our Community</p>
                            </div>
                            <div className="col-lg-6 form-container form-md">
                                <MailChimp />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </React.Fragment>
        );
    }




}
export default homePage;