import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";
import {BLOG_1_URL,
    BLOG_2_URL,
    BLOG_3_URL,
    BLOG_1_IMG_URL,
    BLOG_2_IMG_URL,
    BLOG_3_IMG_URL,
   
 } from "../../constants/config";





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
                        <a href={BLOG_1_URL}
                           rel="noopener noreferrer" target="_blank">
                            <div className="blog-section">
                                <div className="custom-card">
                                    <img className="card-img-top" alt="blog"
                                         src={BLOG_1_IMG_URL}/>
                                    <div className="custom-card-body">
                                        <p className="text">{t("ABOUT")}</p>
                                        <p className="text1">{t("BLOG_TEXT_HEAD")}</p>
                                        <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-md-7">
                        <div className="row m-0">
                            <div className="col-md-6 blog-articles left">
                            <a href={BLOG_2_URL}
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card mb-10" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog2"
                                                 src={BLOG_2_IMG_URL}/>
                                        </div>

                                        <div className="custom-card-body">
                                            <p className="text1">{t("STAKING")}</p>
                                            <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right"/></p>
                                        </div>
                                    </div>
                                </a>
                               
                            </div>
                            <div className="col-md-6 blog-articles right">
                            <a href={BLOG_3_URL}
                                   target="_blank" rel="noopener noreferrer">
                                    <div className="custom-card" data-aos="fade-up">
                                        <div className="blog-image">
                                            <img className="card-img-top" alt="blog3"
                                                 src={BLOG_3_IMG_URL}/>
                                        </div>
                                        <div className="custom-card-body">
                                            <p className="text1">{t("GUIDE")}</p>
                                            <p className="learn-more">{t("LEARN_MORE")}<Icon viewClass="arrow-right" icon="arrow-right"/></p>
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