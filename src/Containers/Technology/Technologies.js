import React from "react";
import sdk from "../../assets/images1/technology/sdk.svg";
import nft from "../../assets/images1/technology/nft.svg";
import node from "../../assets/images1/technology/node.svg";
import paper from "../../assets/images1/technology/paper.svg";
import whitepaper from "../../assets/images1/whitepaper.pdf";
import explorer from "../../assets/images1/technology/explorer.svg";
const Technologies = () => {
    return (
        <section className="section-technology-list" data-aos="fade">
            <div className="container">
                <div className="list">
                    <div className="list-item">
                        <img src={sdk} alt="sdk"/>
                        <p className="name">PersistenceSDK</p>
                        <a href="https://github.com/persistenceOne" rel="noopener noreferrer" target="_blank" className="view">View on GitHub</a>
                    </div>
                    <div className="list-item">
                        <img src={nft} alt="sdk"/>
                        <p className="name">NFT Module</p>
                        <a href="https://docs.internft.org/" rel="noopener noreferrer" target="_blank" className="view">Read Doc</a>
                    </div>
                    <div className="list-item">
                        <img src={node} alt="sdk"/>
                        <p className="name">Validator Node</p>
                        <p className="view coming-soon">Coming Soon</p>
                    </div>
                    <div className="list-item">
                        <img src={paper} alt="sdk"/>
                        <p className="name">Explorer</p>
                        <a href="https://explorer.persistence.one/" rel="noopener noreferrer" target="_blank" className="view">Open Crust</a>
                    </div>
                    <div className="list-item">
                        <img src={explorer} alt="sdk"/>
                        <p className="name">Protocol Paper</p>
                        <a href={whitepaper} rel="noopener noreferrer" target="_blank" className="view">Explore More</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Technologies;