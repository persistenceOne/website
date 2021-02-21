import React from "react";
import audit_white from "../../assets/images1/logos/audit_white.svg";

const Audit = () => {
    return (
        <section className="product-info-section product-audit">
        <div className="container">
            <div className="row">
                <div className="col-md-4 product-info audit">
                    <img src={audit_white} alt="audit_white_logo"/>
                </div>
                <div className="col-md-8">
                    <div className="cards">
                        <p className="text">Staking-as-service solution provider for Proof-of-stake networks <br/>
                            Whitelabels hardware and software solutions to traditional asset managers
                            looking to generate fixed income returns from Staking-as-an-asset-class</p>
                        <div className="row1">
                            <div className="data-card text-left">
                                <p className="value">$150M+</p>
                                <p className="name">Total Assets Secured</p>
                            </div>
                            <div className="data-card side-border text-center">
                                <p className="value">$100M+</p>
                                <p className="name">Assets Under Delegation</p>
                            </div>
                            <div className="data-card text-center">
                                <p className="value">10 </p>
                                <p className="name">Networks Secured</p>
                            </div>
                        </div>
                        <div className="button-list">
                            <a href="https://audit.one/" className="button-primary button" rel="noopener noreferrer" target="_blank">Audit.one</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Audit;