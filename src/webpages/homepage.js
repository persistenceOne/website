import React, { Component } from 'react';
import Header from './components/header';
import {connect} from 'react-redux';
import language from '../webpages/translationlang';
import Validator from './components/validator';
import MailChimp from './components/mailChimp';
import Products from './components/products';
import InterNFT from './components/interNFT';
import Slider from './components/slider';
import Footer from './components/footer';
import proudctBg from '../assets/product_bg.jpg';
import nfts from '../assets/nfts.png';
import colloterals from '../assets/colloterals.svg';
import liquidpools from '../assets/liquidpools.png';
import liquidpools1 from '../assets/liquidpools1.png';
import rightarrow from '../assets/right-arrow.svg';
import threecommas from '../assets/backers/three-commas.svg';
import alamedaresearch from '../assets/backers/alameda-research.svg';
import amplificapital from '../assets/backers/amplifi-capital.svg';
import arrington from '../assets/backers/arrington.svg';
import au21 from '../assets/backers/au21.svg';
import Cosmostation from '../assets/backers/Cosmostation.svg';
import dokia_capital from '../assets/backers/dokia_capital.svg';
import incrypt from '../assets/backers/incrypt.svg';
import iosg from '../assets/backers/iosg.svg';
import lunex from '../assets/backers/lunex.svg';
import moonrock from '../assets/backers/moonrock.svg';
import sgone from '../assets/backers/sg-1.svg';
import Spark from '../assets/backers/Spark.svg';
import terra from '../assets/backers/terra.svg';
import woodstock from '../assets/backers/woodstock.svg';




import whitepaper from '../whitepaper.pdf'
import Icon from './icon';


class homePage extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('nav-bar').classList.add('navbar-white');
    }

    render() {
        
        const { lang } = this.props;
        return (
            <React.Fragment>
                <Header />
                {/* Products Section */}
                <section className="section-1 bg-product product-padding" id="home" data-image-src={proudctBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 text-white mobile-head">
                                <h1 className="title">{language[lang].protocal_powering}</h1>
                                <p className="sub-title title-line">{language[lang].persistence_bridges_defi}</p>
                                <div className="col-lg-12">
                                    <div className="row text-muted mob-text-align">
                                        <ul className="list-unstyled first-section-social-icons">
                                            <a href={whitepaper} target="_blank" rel="noopener noreferrer" title="Whitepaper"><li className="whitepaper"><Icon viewClass="social_icon_imgg" icon="whitepaper" />{language[lang].whitepaper}</li></a>
                                            <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Twitter"><li><Icon viewClass="social_icon_imgg" icon="twitter-logo" /></li></a>
                                            <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank" title="Announcements"><li><Icon viewClass="social_icon_imgg" icon="telegram-plane" /></li></a>
                                            <a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank" title="Medium"><li><Icon viewClass="social_icon_imgg" icon="medium-m" /></li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sub-section">
                    <div className="container">
                        <div className="row row-margin-nft">
                        <div className="margin-t-20 col-lg-4 features">
                            <div className="features-section">
                                <h3>Features</h3>
                                <p>Lorem Ipsum dolar set amet</p>
                                <button className="btn">Know More <img className="sub-service-icons" src={rightarrow} alt="arrow" /></button>
                            </div>
                            </div>
                            <div className="margin-t-20 col-lg-8">
                            <div className="row row-margin-nft">
                            <div className="margin-t-20 col-lg-6">
                                <div className="services-list">
                                    <div className="serviceBody">
                                        <img className="sub-service-icons" src={nfts} alt="nfts" />
                                        <div className="media-body">
                                            <h5>1.&nbsp;{language[lang].asset_tokenization}</h5>
                                            <p className="pt-2">{language[lang].tokenize_real_world_assets}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="margin-t-20 col-lg-6">
                                <div className="services-list">
                                    <div className="serviceBody">
                                        <img className="sub-service-icons" src={colloterals} alt="colloterals" />
                                        <div className="media-body">
                                            <h5>2.&nbsp;{language[lang].asset_exchange}</h5>
                                            <p className="pt-2">{language[lang].cross_chanin_exchange}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="margin-t-20 col-lg-6">
                                <div className="services-list">
                                    <div className="serviceBody">
                                        <img className="sub-service-icons" src={liquidpools} alt="liquidpools" />
                                        <div className="media-body">
                                            <h5>3.&nbsp;{language[lang].liquidity_aggregation}</h5>
                                            <p className="pt-2">{language[lang].invest_lend}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="margin-t-20 col-lg-6">
                                <div className="services-list">
                                    <div className="serviceBody">
                                        <img className="sub-service-icons" src={liquidpools1} alt="liquidpools" />
                                        <div className="media-body">
                                            <h5>4.&nbsp;{language[lang].liquidity_aggregation}</h5>
                                            <p className="pt-2">{language[lang].invest_lend}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>

                </section>
                <section className="section-slider" id="products">
                <div className="inner_section-line">
                    <h3>{language[lang].products}</h3>
                    <div className="container">
                        <div className="row head-slider">
                            <Slider />
                        </div>

                    </div>
                    </div>
                </section>
                <Products />
                <InterNFT />
                <section className="ourbackers">
                    <h3>Our Backers</h3>
                    <div className="container">
                        <div className="backers-row row">
                            <div className="common-row first-row">
                        <img className="logo-img" src={alamedaresearch} alt="Alameda" />
                        <img className="logo-img" src={arrington} alt="Arrington" />
                        <img className="logo-img" src={terra} alt="Terra" />
                        <img className="logo-img" src={terra} alt="ICF" />
                        </div>
                        <div className="common-row second-row">
                        <img className="logo-img" src={lunex} alt="LuneX" />
                        <img className="logo-img" src={woodstock} alt="Woodstock" />
                        <img className="logo-img" src={dokia_capital} alt="Dokia" />
                        <img className="logo-img" src={Cosmostation} alt="Cosmostation" />
                        </div>
                        <div className="common-row third-row">
                        <img className="logo-img" src={au21} alt="Au21" />
                        <img className="logo-img" src={Spark} alt="Spark" />
                        <img className="logo-img" src={iosg} alt="IOSG" />
                        <img className="logo-img" src={Cosmostation} alt="Cosmostation" />
                        </div>
                        <div className="common-row fourth-row">
                        <img className="logo-img" src={incrypt} alt="Incrypt" />
                        <img className="logo-img" src={threecommas} alt="3commas" />
                        <img className="logo-img" src={sgone} alt="SG1" />
                        <img className="logo-img" src={amplificapital} alt="Amplifi Capital" />
                        <img className="logo-img" src={moonrock} alt="Moonrock" />
                        </div>


                        </div>
                        
                    </div>
                </section>
                <section className="validators-section" id="validators">
                    <h3>{language[lang].validators}</h3>
                    <div className="container">
                        <Validator />
                    </div>
                    <p>{language[lang].selected_list}<span className="second-p">{language[lang].selected_list_2}</span></p> 
                </section>

                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>{language[lang].join_our_community}</p>
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

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(homePage);