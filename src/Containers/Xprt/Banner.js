import React from "react";
import xprt_role from "../../assets/images1/role.png";
import xprt_value from "../../assets/images1/value.png";
import economics from "../../assets/images1/economics.png";
import ecosystem from "../../assets/images1/ecosystem.svg";

const Banner = () => {
  return (
    <section className="xprt-banner-section">
      <div className="container">
        <div className="content row">
          <div className="left col-md-5">
            <div className="xprt-title-box">
              <p>
                X<span>P</span>RT
              </p>
            </div>

            <p className="heading">The Heart Of Persistence Ecosystem</p>
            <div className="list">
              <p className="item-heading">
                <img src={xprt_role} alt={xprt_role} /> Role of XPRT
              </p>
              <p className="item-text">
                XPRT is the work token for the Persistence ecosystem: securing the core infrastructure through staking
                and bootstrapping ecosystem applications to propel network adoption. XPRT stakers can participate
                in governance to contribute to the long-term success of the ecosystem.
              </p>
              <p className="item-heading">
                <img src={xprt_value} alt={xprt_value} />Token Utility
              </p>
              <p className="item-text">
                XPRT can be put to use in various ways: it can be staked to secure the chain and to participate in
                governance, or it can be used as gas to execute on-chain transactions, including smart contract
                transactions and IBC-transfers.
              </p>
              <p className="item-heading">
                <img src={economics} alt={economics} /> Economics
              </p>
              <p className="item-text">
                The XPRT token was launched with a genesis supply of 100,000,000 XPRT and an inflation rate of 35%,
                fluctuating between 25% and 45%, depending on the bonding ratio. When the bonding ratio is higher/lower
                than the target of 67%, inflation reduces/increases gradually, within the boundaries of the inflation
                min and max parameters. Every 2 years, these parameters are halved, leading to a capped maximum supply.
              </p>
              <div className="buttons">
                <a
                  href="https://blog.persistence.one/2021/03/25/xprt-tokenomics-and-utility-powering-the-persistence-ecosystem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  TOKENOMICS
                </a>
              </div>
            </div>
          </div>
          <div className="right col-md-7">
            <img src={ecosystem} alt={ecosystem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
