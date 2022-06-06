import React from "react";
import xprt_role from "../../assets/images1/xprt_role.svg";
import xprt_value from "../../assets/images1/xprt_value.svg";
import economics from "../../assets/images1/xprt_economics.svg";
import ecosystem from "../../assets/images1/ecosystem.svg";

const Banner = () => {
    return (
        <section className="xprt-banner-section">
            <div className="container">
                <div className="content row">
                    <div className="left col-md-6">
                      <div className="xprt-title-box">
                          <p>X<span>P</span>RT</p>
                      </div>

                        <p className="heading">The Heart Of Persistence Ecosystem</p>
                        <div className="list">
                            <p className="item-heading"><img src={xprt_role} alt={xprt_role}/> Role of XPRT</p>
                            <p className="item-text">XPRT is the work token for the Persistence ecosystem, bootstrapping ecosystem applications
                                to propel network adoption, and securing the core infrastructure through staking.
                                XPRT stakers can participate in governance to contribute to the long-term success of the
                                ecosystem.
                            </p>
                            <p className="item-heading"><img src={xprt_value} alt={xprt_value}/> Value Accruel</p>
                            <p className="item-text">XPRT accrues value from the ecosystem’s financial activity through multiple avenues
                                including gas fees, fee-sharing with ecosystem application, hub-routing, etc.
                            </p>
                            <p className="item-heading"><img src={economics} alt={economics}/> Economics</p>
                            <p className="item-text">XPRT is a deflationary token with a genesis supply of 100,000,000 XPRT and a maximum
                                supply of 403,308,352 XPRT. Initial inflation will range from 25-45% with the target
                                of 35% achieved at 66.7% bonding ratio. Inflation halving happens every two years and
                                the maximum supply cap is expected to be reached by the year 2035.
                            </p>
                            <div className="buttons">
                                <a href="https://medium.com/persistence-blog/xprt-tokenomics-and-utility-powering-the-persistence-ecosystem-70fc49e10362"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="primary">
                                    TOKENOMICS
                                </a>

                                <a href="https://medium.com/persistence-blog/the-vision-for-persistence-and-xprt-value-accrual-53fd56619e3d"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="button-secondary">
                                    TUTORIAL
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="right col-md-6">
                        <img src={ecosystem} alt={ecosystem} />
                    </div>
                </div>
                <div className="aquire-content">
                    <p className="title">Acquire XPRT</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
