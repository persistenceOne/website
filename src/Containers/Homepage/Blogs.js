import React from "react";
import Icon from "../../components/Icon";
const Blogs = () => {
    return (
        <section className="stay-updated">
            <div className="title-line-section">
                <h3 className="section-title">Featured Blogs</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 reveal-from-bottom">
                        <a href="https://medium.com/persistence-blog/matic-stakedrop-tutorial-using-matic-web-wallet-how-matic-holders-can-participate-in-7f0e31df3a8c" rel="noopener noreferrer" target="_blank">
                            <div className="blog-section">
                                    <div className="custom-card">
                                        <img className="card-img-top" alt="blog" src="https://miro.medium.com/max/1000/1*Wys_KVVJr99svVy-jGMYag.png" />
                                        <div className="custom-card-body">
                                            <p className="text">Stakedrop</p>
                                            <p className="text1">Persistence’s fourth StakeDrop campaign on Matic Network will launch on the 18th of January 2021, when Magic Transactions go live, with reward allocations beginning on the 20th...</p>
                                            <a href="https://medium.com/persistence-blog/matic-stakedrop-tutorial-using-matic-web-wallet-how-matic-holders-can-participate-in-7f0e31df3a8c" rel="noopener noreferrer" target="_blank"  className="learn-more">Learn More <Icon viewClass="arrow-right" icon="arrow-right"/></a>
                                        </div>
                                    </div>

                            </div>
                            </a>
                    </div>
                    <div className="col-md-7">
                        <div className="row m-0">
                            <div className="col-md-6 blog-articles left">
                                <a href="https://medium.com/persistence-blog/our-journey-toward-a-new-financial-paradigm-persistence-200e7efafa81" target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10 reveal-from-bottom" data-reveal-delay="200" >
                                        <img className="card-img-top" alt="blog2" src="https://miro.medium.com/max/1000/1*GiRBfno3sWdPEdLaeqHpQQ.png" />
                                        <div className="custom-card-body">
                                            <p className="text1">About</p>
                                            <a href="https://medium.com/persistence-blog/our-journey-toward-a-new-financial-paradigm-persistence-200e7efafa81" rel="noopener noreferrer" target="_blank"  className="learn-more">Learn More <Icon viewClass="arrow-right" icon="arrow-right"/></a>
                                        </div>
                                    </div></a>
                                <a href="https://medium.com/persistence-blog/persistence-one-first-to-implement-interchain-native-nft-transfer-bags-icf-grant-cdb6c3856c25" target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card reveal-from-bottom" data-reveal-delay="400">
                                        <img className="card-img-top" alt="blog3" src="https://miro.medium.com/max/1000/0*wa22sTXP7YDMj2k8" />
                                        <div className="custom-card-body">
                                            <p className="text1">About</p>
                                            <a href="https://medium.com/persistence-blog/persistence-one-first-to-implement-interchain-native-nft-transfer-bags-icf-grant-cdb6c3856c25" rel="noopener noreferrer" target="_blank"  className="learn-more">Learn More <Icon viewClass="arrow-right" icon="arrow-right"/></a>
                                        </div>
                                    </div></a>
                            </div>
                            <div className="col-md-6 blog-articles right">
                                <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428" target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10 reveal-from-bottom" data-reveal-delay="200" >
                                        <img className="card-img-top" alt="blog4" src="https://miro.medium.com/max/1000/1*8tJhZXSzGxRl2aisB43BmA.png" />
                                        <div className="custom-card-body">
                                            <p className="text1">STAKEDROP</p>
                                            <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428" rel="noopener noreferrer" target="_blank"  className="learn-more">Learn More <Icon viewClass="arrow-right" icon="arrow-right"/></a>
                                        </div>
                                    </div></a>
                                <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428" target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card reveal-from-bottom" data-reveal-delay="400">
                                        <img className="card-img-top" alt="blog5" src="https://miro.medium.com/max/1000/1*8tJhZXSzGxRl2aisB43BmA.png" />
                                        <div className="custom-card-body">
                                            <p className="text1">PARTNERSHIP</p>
                                            <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428" rel="noopener noreferrer" target="_blank"  className="learn-more">Learn More <Icon viewClass="arrow-right" icon="arrow-right"/></a>
                                        </div>
                                    </div></a>
                            </div>
                        </div>
                    </div>


                    {/*<div className="col-lg-12 blog-articles">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-lg-4">*/}

                    {/*        </div>*/}
                    {/*        <div className="col-lg-4">*/}

                    {/*        </div>*/}
                    {/*        <div className="col-lg-4">*/}
                    {/*          */}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
        // <section className="blog-slider">
        //     <div className="container">
        //         <h3 className="section-title">{t("LATEST_UPDATES")}</h3>
        //         <BlogSlider/>
        //     </div>
        // </section>
    )
}
export default Blogs;