import React from "react";
import mantle from "../../assets/images1/mantle_white.svg"
import plend from "../../assets/images1/logos/plend_white.svg";

const ComingSoon = () => {
    return (
        <section className="coming-soon-section">
            <div className="container">
                <h3 className="heading">Coming soon</h3>
                <div className="products">
                    <div className="product">
                        <img src={mantle} alt="mantle-logo"/>
                        <p>NFT Marketplace Framework</p>
                        <a href="https://twitter.com/AssetMantle" rel="noopener noreferrer" target="_blank">Learn More</a>
                    </div>
                    <div className="product">
                        <img src={plend} alt="mantle-logo"/>
                        <p>Debt Financing dApp</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ComingSoon;