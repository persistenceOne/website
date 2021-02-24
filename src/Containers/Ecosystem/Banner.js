import React, {useState} from "react";
import Icon from "../../components/Icon";
import Modal from "./Modal";

const Banner = () => {
    const [name, setName] = useState("");

    const handleModalData = (name) => {
        setName(name)
    };
    return (
        <section className="section-ecosystem-banner" data-aos="fade-up">
            <div className="container">
                <h3 className="section-title">Ecosystem</h3>
                <div className="social-links">
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="telegram-plane"/>
                            </div>
                        </div>
                        <a className="text" href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">Community Chat</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="announcements"/>
                            </div>
                        </div>
                        <a className="text" href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">Announcements</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="chat"/>
                            </div>
                        </div>
                        <a className="text" href="https://discord.gg/SaBKpjbnhH" rel="noopener noreferrer" target="_blank">Dev Chat</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="twitter-logo"/>
                            </div>
                        </div>
                        <a className="text" href="https://twitter.com/hu_zhiwei" rel="noopener noreferrer" target="_blank">Twitter</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="youtube"/>
                            </div>
                        </div>
                        <a className="text" href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured" rel="noopener noreferrer" target="_blank">Youtube</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="reddit-round"/>
                            </div>
                        </div>
                        <a className="text" href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank">Reddit</a>
                    </div>
                    <div className="link">
                        <div className="outer-box">
                            <div className="icon-box">
                                <Icon viewClass="social_icon_imgg" icon="regional"/>
                            </div>
                        </div>
                        <p className="text" onClick={handleModalData}>Regional</p>
                    </div>
                </div>
            </div>
            {
                name ?
                    <Modal setName={setName} /> :
                    null
            }
        </section>
    )
};
export default Banner;