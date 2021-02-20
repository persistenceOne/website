import React from "react";
import mantle_white from "../../assets/images1/mantle_white.svg"

const AssetMantle = () => {
    return (
        <>
            <section className="section-asset-mantle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left-section">
                            <p className="sub-text">Build your own NFT marketplace</p>
                            <h3 className="title">Mantle Chain</h3>
                            <p className="text">Application implementing the minimum clique of PersistenceSDK modules
                                enabling interchain NFT definition, issuance, ownership transfer and decentralized
                                exchange.
                            </p>
                            <div className="button-list">
                                <a href="https://github.com/persistenceOne/assetMantle" className="button-primary button" rel="noopener noreferrer" target="_blank">Github</a>
                                <a href="https://docs.internft.org/" className="button-secondary button" rel="noopener noreferrer" target="_blank">Docs</a>
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="logo">
                                <img src={mantle_white} alt="sdk_logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AssetMantle;