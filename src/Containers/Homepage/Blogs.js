import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";

const Blogs = () => {
    const {t} = useTranslation();
    return (
        <section className="stay-updated">
            <div className="title-line-section">
                <h3 className="section-title">{t("BLOGS_SECTION_TITLE")}</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5" data-aos="fade-up">
                        <a href="https://medium.com/persistence-blog/how-persistence-is-ushering-in-a-new-era-of-next-gen-financial-products-a06e5d57c72b"
                           rel="noopener noreferrer" target="_blank">
                            <div className="blog-section">
                                <div className="custom-card">
                                    <img className="card-img-top" alt="blog"
                                         src="https://miro.medium.com/max/1684/1*H0mHBkwD2VdVnQ_9ECQmfA.png"/>
                                    <div className="custom-card-body">
                                        <p className="text">{t("ABOUT")}</p>
                                        <p className="text1">{t("BLOG1_TEXT")}</p>
                                        <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-md-7">
                        <div className="row m-0">
                            <div className="col-md-6 blog-articles left">
                                <a href="https://medium.com/persistence-blog/50-000-worth-of-xprt-will-be-distributed-to-matic-stakers-during-the-matic-stakedrop-beginning-97431e137133"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src="https://miro.medium.com/max/1981/1*5uzz509r3c5kMSbvzVAVRg.png"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">{t("STAKEDROP")}</p>
                                            <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                              
                            </div>
                            <div className="col-md-6 blog-articles right">
                              
                                <a href="https://medium.com/persistence-blog/persistence-raises-3-7m-from-industry-heavyweights-to-bridge-traditional-finance-and-defi-via-nfts-a30256cdb428"
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog4"
                                                 src="https://miro.medium.com/max/6732/1*8tJhZXSzGxRl2aisB43BmA.png"/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">{t("FUND_RAISE")}</p>
                                            <p className="learn-more">{t("LEARN_MORE")} <Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};
export default Blogs;