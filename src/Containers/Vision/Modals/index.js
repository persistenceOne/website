import React, {useState} from "react";
import {Modal as ReactModal} from "react-bootstrap";
import Tushar from "../../../assets/images1/pics/tushar.png";
import deepanshu from "../../../assets/images1/pics/deepanshu.png";
import jason from "../../../assets/images1/pics/pic3.svg";
import sandeep from "../../../assets/images1/pics/pic4.svg";
import jeffrey from "../../../assets/images1/pics/pic5.svg";
import Icon from "../../../components/Icon";

const data = [
    {
        key: 'tushar',
        name: 'Tushar Aggarwal',
        about: 'Tushar helped to set up LuneX Ventures - first regulated Crypto VC fund in Southeast Asia (Crypto arm of a ’Traditional’ Singapore VC called Golden Gate Ventures). Written extensively on Blockchain/Crypto on Tech in Asia and previously host of Decrypt Asia Podcast.',
        role: 'CEO and Co-founder',
        twitter: 'https://twitter.com/Tushar307',
        linkedIn: 'https://www.linkedin.com/in/tushar-aggarwal-2823b02b/',
        img: Tushar
    },
    {
        key: 'deepanshu',
        name: 'Deepanshu Tripati',
        about: 'Part of a three-person team to create a unified payment acceptance platform. White-labeled to Reliance (invested by Facebook, etc) eventually sold to African Fintech for $9M USD. Performed world’s first ever Inter-Blockchain NFT transfer.',
        role: 'CTO and Co-founder, Persistence',
        twitter: 'https://twitter.com/deepanshutr',
        linkedIn: 'https://www.linkedin.com/in/deepanshutr/',
        img: deepanshu
    }
    ,
    {
        key: 'jason',
        name: 'Jason Choi',
        about: 'Jason is a host of the most popular Asian Crypto Podcast called The Blockcrunch. Jason has been and will be providing inputs on positioning of product, branding, marketing.',
        role: 'Head of Research, Spartan Capital',
        twitter: 'https://twitter.com/mrjasonchoi',
        linkedIn: 'https://www.linkedin.com/in/jasonhtchoi/',
        img: jason
    },
    {
        key: 'sandeep',
        name: 'Sandeep Nailwal',
        about: 'Matic Network is a very successful project from India which was also part of the Binance Launchpad initiative. Sandeep is helping bridge connections to media and assist on token management.',
        role: 'Co-founder and COO, Matic Network',
        twitter: 'https://twitter.com/sandeepnailwal',
        linkedIn: 'https://www.linkedin.com/in/sandeep-nailwal-60709a33/',
        img: sandeep
    },
    {
        key: 'jeffrey',
        name: 'Jeffrey Hu',
        about: 'Jeffrey is the Director of Research at IRISnet (China hub of Cosmos) and is primarily helping on giving exposure to Persistence in China as a fellow Tendermint Project.',
        role: 'Director of Research, IRIS Network',
        twitter: 'https://twitter.com/hu_zhiwei',
        linkedIn: null,
        img: jeffrey
    }
];
const Modal = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.setName("");
    };

    return (
        <div>
            <ReactModal show={show} onHide={handleClose} className="info-modal" centered>
                <ReactModal.Body>
                    {
                        data.map((item, index) => {
                            if (item.key === props.name) {
                                return (
                                    <div className="modal-data">
                                        <button className="close-button" onClick={handleClose}>x</button>
                                        <div className="profile-image">
                                            <img src={item.img} alt="img"/>
                                        </div>
                                        <div className="content">
                                            <p className="name">{item.name}</p>
                                            <p className="role">{item.role}</p>
                                            <p className="about">{item.about}</p>
                                            <div className="icons">{
                                                item.twitter ?
                                                    <a className="icon-box" href={item.twitter}
                                                       rel="noopener noreferrer" target="_blank"><Icon
                                                        viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                                    : null
                                            }{
                                                item.linkedIn ?
                                                    <a className="icon-box" href={item.linkedIn}
                                                       rel="noopener noreferrer"
                                                       target="_blank"><Icon viewClass="social_icon_imgg"
                                                                             icon="linkedin-footer"/></a>
                                                    : null
                                            }


                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                            return null;
                        })
                    }

                </ReactModal.Body>
            </ReactModal>
        </div>
    );
};

export default Modal;
