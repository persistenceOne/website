import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import pastakelogo from "../../assets/images1/pstake-logo-symbol.svg";
import dexter_logo from "../../assets/images1/logos/dexter.svg";
import atom from "../../assets/images1/atom.svg";
import eth from "../../assets/images1/eth.svg";
import bnb from "../../assets/images1/bnb.svg";

const Ecosystem = () => {
  return (
    <section className="home-ecosystem-section">
      <div className="container">
        <h3 className="section-title">Built on Persistence</h3>
        <p className="sub-heading">
          Explore dApps that power the one-stop-shop for liquid staking
        </p>
        <div className="card-tiles">
          <CardGroup>
            <Card className={"h-100"}>
              <div className={"card-section"}>
                <Card.Body>
                  <Card.Img variant="top" src={pastakelogo} />
                  <Card.Text className={"mb-3 mt-4"}>
                    <span>
                      pSTAKE is a multi-chain liquid staking protocol that
                      unlocks liquidity for your staked assets.
                    </span>
                  </Card.Text>
                  <div className={"networks mt-4"}>
                    <h5>
                      <span>Live&nbsp;for&nbsp;</span>
                      <img src={atom} alt="Atom" title="Atom" />
                      <img src={bnb} alt={"BNB"} title="BNB" />
                      <img src={eth} alt="ETH" title="ETH" />
                    </h5>
                  </div>
                  <div className={"button-section"}>
                    <a
                      href="https://app.pstake.finance/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button"
                    >
                      GO TO APP
                    </a>
                    <a
                      href="https://pstake.finance/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button two"
                    >
                      Learn More
                    </a>
                  </div>
                </Card.Body>
              </div>
            </Card>
            <Card className={"h-100"}>
              <div className={"card-section"}>
                <Card.Body className={"h-100 d-flex flex-column"}>
                  <Card.Img variant="top" src={dexter_logo} />
                  <Card.Text className={"mb-3 mt-4"}>
                    <span>
                      Dexter is an Interchain DEX for yield generating assets
                      such as LSTs.
                    </span>
                  </Card.Text>
                  <div
                    className={
                      "networks mt-4 flex-fill justify-content-start align-items-end"
                    }
                  >
                    <div className={"button-section"}>
                      <a
                        href="https://app.dexter.zone/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="button-initial button"
                      >
                        GO TO APP
                      </a>
                      <a
                        href="https://dexter.zone/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="button-initial button two"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </CardGroup>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
