import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import language from '../webpages/translationlang';
import Validator from './components/validator';
import BackersTabs from './components/backersTabs';
import Products from './components/products';
import InterNFT from './components/interNFT';
import Slider from './components/slider';
import proudctBg from '../assets/product_bg.jpg';
import blockbeats from '../assets/blockbeats.svg';
import nfts from '../assets/nfts.png';
import colloterals from '../assets/colloterals.svg';
import liquidpools from '../assets/liquidpools.png';
import medium from '../assets/medium.svg';
import cointelegraph from '../assets/CT.svg';
import coindesk from '../assets/coindesk01.svg';
import financemagnet from '../assets/FM.svg';
import yahoofinance from '../assets/YF.svg';
import dsa from '../assets/dsa.svg';
import e27 from '../assets/e27.svg';
import chainnews from '../assets/chainnews.svg';
import whitepaper from '../whitepaper.pdf'
import Icon from './icon';
import Header from '../webpages/components/header';
import block1 from '../assets/block1.png';
import block2 from '../assets/block2.png';
import block3 from '../assets/block3.png';

class homePage extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('nav-bar').classList.add('navbar-white');
    }

    render() {

        const { lang } = this.props;
        return (
            <div>
                <Header />
                {/* Products Section */}
                <div className="bg-section-1">
                    <section className="section-1 bg-product product-padding" id="home" data-image-src={proudctBg}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 text-white mobile-head">
                                    <h1 className="title">{language[lang].protocal_powering}</h1>
                                    <p className="sub-title title-line">{language[lang].persistence_bridges_defi}</p>
                                    <div className="col-lg-12">
                                        <div className="row text-muted mob-text-align">
                                            <ul className="list-unstyled first-section-social-icons">
                                                <a href="https://medium.com/persistence-blog/pos-token-holders-prepare-yourselves-for-persistence-stakedrop-the-grand-unveiling-d5f6ca6ddc40" target="_blank" rel="noopener noreferrer"><li className="whitepaper"><Icon viewClass="social_icon_imgg" icon="earn" />Earn XPRT</li></a>
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
                        <img src={block1} alt="block1" className="block1" />
                        <img src={block2} alt="block2" className="block2" />
                        <img src={block3} alt="block3" className="block3" />
                    </section>
                </div>
                <section className="sub-section">
                    <h3>Features</h3>
                    <div className="container">
                        <div className="row row-margin-nft">
                            <div className="margin-t-20 col-lg-12">
                                <div className="row row-margin-nft">
                                    <div className="margin-t-20 col-lg-4">
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
                                    <div className="margin-t-20 col-lg-4">
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
                                    <div className="margin-t-20 col-lg-4">
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
                                    {/* <div className="margin-t-20 col-lg-6">
                                <div className="services-list">
                                    <div className="serviceBody">
                                        <img className="sub-service-icons" src={liquidpools1} alt="liquidpools" />
                                        <div className="media-body">
                                            <h5>4.&nbsp;{language[lang].liquidity_aggregation}</h5>
                                            <p className="pt-2">{language[lang].invest_lend}</p>
                                        </div>

                                    </div>

                                </div>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="section-slider" id="products">
                    <div className="inner_section-line">
                        <h3 className="product-head">{language[lang].products}</h3>
                        <div className="container">
                            <div className="row head-slider">
                                <Slider />
                            </div>

                        </div>
                    </div>
                </section>
                <Products />
                <InterNFT />
                <section className="validators-section" id="validators">
                    <h3>{language[lang].validators}</h3>
                    <div className="container">
                        <Validator />
                    </div>
                    <p>{language[lang].selected_list}<span className="second-p">{language[lang].selected_list_2}</span></p>
                </section>
                <section className="ourbackers">
                    <h3>Our Backers</h3>
                    <div className="container">
                        <BackersTabs />


                    </div>
                </section>
                <section className="stay-updated">
                    <h3>Highlights</h3>
                    <div className="container">
                        <div className="row">
                            <a href="https://medium.com/persistence-blog/cosmos-stakedrop-begins-october-26th-50-000-worth-of-xprt-will-be-allocated-to-atom-stakers-47c4ab797d2e" rel="noopener noreferrer" target="_blank"><div className="col-lg-12">
                                <div className="row blog-section">
                                    <div className="col-lg-4">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src="https://miro.medium.com/max/1000/1*0Uq10CHt_y7d-OBPx_KkVg.png" />
                                        </Card>
                                    </div>
                                    <div className="col-lg-8 blog-head">
                                        <Card.Body>
                                            <Card.Title>Cosmos StakeDrop Begins October 26th! $50,000 Worth of XPRT will be Allocated to ATOM Stakers!</Card.Title>

                                            <p className="blog-medium">20 OCT 2020</p>
                                            <img className="blog-year" src={medium} alt="Medium" />
                                        </Card.Body>
                                    </div>
                                </div>
                            </div></a>
                            <div className="col-lg-12 blog-articles">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <a href="https://medium.com/persistence-blog/persistence-one-first-to-implement-interchain-native-nft-transfer-bags-icf-grant-cdb6c3856c25" target="_blank" rel="noopener noreferrer">
                                            <Card style={{ width: '100%' }}>
                                                <Card.Img variant="top" src="https://miro.medium.com/max/1000/0*wa22sTXP7YDMj2k8" />
                                                <Card.Body>
                                                    <Card.Title title="Interchain Foundation awards Persistence One a grant to develop Interchain Standards for NFTs and Metadata">Interchain Foundation awards Persistence One a grant to develop Interchain Standards for NFTs and Metadata</Card.Title>
                                                    <p className="blog-medium">31 AUG 2020</p>
                                                    <img className="blog-year" src={medium} alt="Medium" />
                                                </Card.Body>
                                            </Card></a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428" target="_blank" rel="noopener noreferrer">
                                            <Card style={{ width: '100%' }}>
                                                <Card.Img variant="top" src="https://miro.medium.com/max/1000/1*8tJhZXSzGxRl2aisB43BmA.png" />
                                                <Card.Body>
                                                    <Card.Title title="Persistence Raises $3.7M from Industry Heavyweights to Bridge Traditional Finance and DeFi via NFTs">Persistence Raises $3.7M from Industry Heavyweights to Bridge Traditional Finance and DeFi via NFTs</Card.Title>
                                                    <p className="blog-medium">2 OCT 2020</p>
                                                    <img className="blog-year" src={medium} alt="Medium" />
                                                </Card.Body>
                                            </Card></a>
                                    </div>
                                    <div className="col-lg-4">
                                        <a href="https://blog.cosmos.network/leading-interoperability-protocol-cosmos-network-partners-with-persistence-one-to-launch-hackatom-d06c1a234885" target="_blank" rel="noopener noreferrer">
                                            <Card style={{ width: '100%' }}>
                                                <Card.Img variant="top" src="https://miro.medium.com/max/1000/1*B19-vbybSwSoc2qTzS73-g.png" />
                                                <Card.Body>
                                                    <Card.Title title="Persistence’s focus on Open Finance — Asset-Based Lending">Cosmos Network Partners with Persistence One to launch ‘HackAtom India: Build the Cosmos’</Card.Title>
                                                    <p className="blog-medium">4 SEP 2020</p>
                                                    <img className="blog-year" src={medium} alt="Medium" />
                                                </Card.Body>
                                            </Card></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feacturedon">
                    <h3>Featured On</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-row first-row">
                                    <a href="https://t.co/HJjAp73SSb" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={coindesk} alt="Coindesk" /></a>
                                    <a href="https://cointelegraph.com/news/blockchain-interoperability-the-holy-grail-for-cross-chain-deployment" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={cointelegraph} alt="Cointelegraph" /></a>
                                    <a href="https://finance.yahoo.com/news/comdex-completes-over-10m-worth-070800123.html?guccounter=1" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={yahoofinance} alt="Yahoo Finance" /></a>
                                    <a href="https://www.financemagnates.com/cryptocurrency/news/all-eyes-on-india-as-supreme-court-crypto-case-advances/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={financemagnet} alt="Finance Magnates" /></a>
                                    <a href="https://www.chainnews.com/news/244436790135.htm" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={chainnews} alt="ChainNews" /></a>
                                    <a href="https://www.dealstreetasia.com/stories/x-zell-persistence-211639/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={dsa} alt="dsa" /></a>
                                    <a href="https://e27.co/techcrunch-founders-vc-firm-leads-us3-7m-in-ex-golden-gate-employees-blockchain-startup-persistence-20201015/" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={e27} alt="e27" /></a>
                                    <a href="https://www.theblockbeats.com/news/20422" target="_blank" rel="noopener noreferrer"><img className="logo-img" src={blockbeats} alt="blockbeats" /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>






            </div>
        );
    }




}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(homePage);