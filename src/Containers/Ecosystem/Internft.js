import React from "react";
import internft_logos from "../../assets/images1/internft_logos.svg";
const Internft = () => {
    return (
        <>
            <section className="internft-section" id="section-nft">
                <div className="title-line-section">
                    <h3 className="section-title">interNFT</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 logos">
                            <img src={internft_logos} alt="internft_logos" className="internft-logos"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>
                                    interNFT is a working group consisting of the leading interoperable projects and
                                    protocols building inter-chain standards for non-fungible tokens (NFTs) and NFT
                                    Metadata. This open collaboration was initiated by the Interchain Foundation and is
                                    being facilitated by Persistence together with ixo.
                                </p>
                                <a href="https://internft.org/" rel="noopener noreferrer" target="_blank" className="button-primary button">internft.org</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Internft;