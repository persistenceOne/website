import React from "react";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";
import curvedBorder from '../../assets/images1/curvedBorder.svg'
import {NavLink} from "react-router-dom";
// import Persistence from "../../assets/Persistence_3.mp4";
const Banner = () => {
    const {t} = useTranslation();
    const handleScroll = () =>{
        window.scrollTo(0, 600, 'smooth');
    }
    return (
        <section className="banner-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    {/*data-aos="fade-up"  data-aos-delay="2000"*/}
                    <div className="col-md-6 col-sm-12">
                        <p className="caption">{t("BANNER_CAPTION")}</p>
                        <h3 className="banner-heading">Protocol Powering Next-Gen Financial Products</h3>
                        <div className="banner-buttons">
                            <NavLink className="button xprt" to="/stakedrop"> Earn X<p>PRT</p></NavLink>
                            <a rel="noopener noreferrer" target="_blank" className="button white-paper" href="https://medium.com/persistence-blog">Learn More</a>
                        </div>
                        <div className="social-icons">
                            <ul className="list-unstyled first-section-social-icons">
                                <a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank"
                                   title="Twitter">
                                    <li><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></li>
                                </a>
                                <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank"
                                   title="Announcements">
                                    <li><Icon viewClass="social_icon_imgg" icon="telegram-plane"/></li>
                                </a>
                                <a href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured" rel="noopener noreferrer" target="_blank"
                                   title="Youtube">
                                    <li><Icon viewClass="social_icon_imgg" icon="youtube"/></li>
                                </a>
                                <a href="https://www.reddit.com/r/PersistenceOne/" rel="noopener noreferrer" target="_blank"
                                   title="Reddit">
                                    <li><Icon viewClass="social_icon_imgg" icon="reddit-round"/></li>
                                </a>
                            </ul>
                        </div>
                        <div className="mouse-section">
                            <Icon viewClass="social_icon_imgg" icon="mouse"/>
                            <p onClick={handleScroll}>Scroll Down</p>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 content">
                        {/*<div>*/}
                        {/*<video className="banner-video" autoPlay="autoplay" preload loop="loop"*/}
                        {/*       muted src={Persistence}>*/}
                        {/*    <source type="video/webm" src={Persistence}/>*/}
                        {/*    <source type="video/mp4" src={Persistence}/>*/}
                        {/*    <source type="video/ogg" src={Persistence}/>*/}
                        {/*</video>*/}
                        {/*</div>*/}
                        <div className="content-box">
                        <p className="banner-content"> Bridging the gap between traditional finance and DeFi by facilitating the easy free flow of assets.</p>
                        <img src={curvedBorder} alt="curvedBorder" className="curve"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;