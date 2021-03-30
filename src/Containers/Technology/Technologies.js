import React from "react";
import sdk from "../../assets/images1/technology/sdk.svg";
import nft from "../../assets/images1/technology/nft.svg";
import node from "../../assets/images1/technology/node.svg";
import paper from "../../assets/images1/technology/paper.svg";
import whitepaper from "../../assets/images1/whitepaper.pdf";
import explorer from "../../assets/images1/technology/explorer.svg";
import wallet from "../../assets/images1/technology/wallet.svg";
import {useTranslation} from "react-i18next";
let explorerURL = process.env.REACT_APP_EXPLORER_URL;
const Technologies = () => {
    const {t} = useTranslation();
    return (
        <section className="section-technology-list" data-aos="fade">
            <div className="container">
                <div className="list">
                    <div className="list-item">
                        <img src={sdk} alt="sdk"/>
                        <p className="name">{t("PERSISTENCE_SDK")}</p>
                        <a href="https://github.com/persistenceOne" rel="noopener noreferrer" target="_blank" className="view">{t("VIEW_GITHUB")}</a>
                    </div>
                    <div className="list-item">
                        <img src={nft} alt="sdk"/>
                        <p className="name">{t("NFT_MODULE")}</p>
                        <a href="https://docs.internft.org/" rel="noopener noreferrer" target="_blank" className="view">{t("READ_DOC")}</a>
                    </div>
                    <div className="list-item">
                        <img src={node} alt="sdk"/>
                        <p className="name">{t("VALIDATOR_NODE")}</p>
                        <a href="https://forms.gle/EcHn9W9JADTaPXGHA" rel="noopener noreferrer" target="_blank" className="view">{t("BECOME_VALIDATOR")}</a>
                    </div>
                    <div className="list-item">
                        <img src={paper} alt="sdk"/>
                        <p className="name">{t("EXPLORER")}</p>
                        <a href={`${explorerURL}`}rel="noopener noreferrer" target="_blank" className="view">{t("OPEN_CRUST")}</a>
                    </div>
                    <div className="list-item">
                        <img src={explorer} alt="sdk"/>
                        <p className="name">{t("PROTOCOL_PAPER")}</p>
                        <a href={whitepaper} rel="noopener noreferrer" target="_blank" className="view">{t("EXPLORE_MORE")}</a>
                    </div>
                    <div className="list-item">
                        <img src={wallet} alt="sdk"/>
                        <p className="name">Persistence Wallet</p>
                        <a href="https://wallet.persistence.one/" rel="noopener noreferrer" target="_blank" className="view">Open</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Technologies;