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
                                <h1 className="title">Protocol Powering Institutional </h1>
                                <h1 className="title">Decentralized Finance</h1>
                                <p className="sub-title title-line">Persistence bridges DeFi and Traditional Finance by
                                 facilitating borrowing <br /> of Cryptoassets using Real-world assets as collateral</p>
                               
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
                                        <img src={nfts} alt="nfts" />
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
                                        <img src={colloterals} alt="colloterals" />
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
                                        <img src={liquidpools} alt="liquidpools" />
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
                    <h3>Product</h3>
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
                    <p>Selected list of top validators in our ecosystem <br />secure more than $700M USD worth of assets collectively</p>
                </section>

                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Get inside the hustle</p>
                            </div>
                            <div className="col-lg-6 form-container">
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