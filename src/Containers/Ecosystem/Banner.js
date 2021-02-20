import React from "react";
import Icon from "../../components/Icon";

const Banner = () => {
    return (
        <section className="section-ecosystem-banner" data-aos="fade-up">
            <div className="container">
                <h3 className="section-title">Ecosystem is the final frontier for any decentralised network.</h3>
                {/*<p className="info">Persistence Ecosystem is the final frontier for any decentralised network</p>*/}
                <div className="social-links">
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="telegram-plane"/>
                            </div>
                        </div>
                        <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">/PersistenceOne</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="announcements"/>
                            </div>
                        </div>
                        <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">Announcements</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="chat"/>
                            </div>
                        </div>
                        <a href="https://discord.gg/SaBKpjbnhH" rel="noopener noreferrer" target="_blank">Dev Chat</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="twitter-logo"/>
                            </div>
                        </div>
                        <a href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank">Twitter Page</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="youtube"/>
                            </div>
                        </div>
                        <a href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured" rel="noopener noreferrer" target="_blank">Youtube</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="reddit-round"/>
                            </div>
                        </div>
                        <a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">Reddit</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="regional"/>
                            </div>
                        </div>
                        <a href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank">Regional</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;