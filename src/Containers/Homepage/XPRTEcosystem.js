import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import validator from "../../assets/images1/validatoricon.svg";
import community from "../../assets/images1/community.svg";
import build from "../../assets/images1/buildon.svg";

const XPRTEcosystem = () => {
  return (
    <section className="home-ecosystem-section xprtecosystem">
      <div className="container">
        <h3 className="section-title">
          Get Involved In the Persistence Ecosystem. Powered by{" "}
          <span className={"subt"}>
            X<span>P</span>RT
          </span>{" "}
        </h3>
        <p className="sub-heading"></p>
        <div className="card-tiles flex">
          <CardGroup>
            <Card className={"h-100"}>
              <div className={"card-section"}>
                <Card.Body>
                  <div>
                    <div className={"symbol-section"}>
                      <Card.Img variant="top" src={build} />
                      <h5>&nbsp;</h5>
                    </div>
                    <Card.Title className={"mb-3 mt-4"}>
                      Build on Persistence
                    </Card.Title>
                    <Card.Text>
                      To create innovative use cases around liquid staked assets/LSTs
                    </Card.Text>
                  </div>
                  <div className={"button-section cards-buttons mt-2"}>
                    <a
                      href="https://docs.persistence.one/build/grants"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button"
                    >
                      Ecosystem Grants
                    </a>
                    <a
                      href="https://github.com/persistenceOne/persistenceCore"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button ml-3"
                    >
                      Github
                    </a>
                  </div>
                </Card.Body>
              </div>
            </Card>
            <Card className={"h-100"}>
              <div className={"card-section h-100"}>
                <Card.Body>
                  <div>
                    <div className={"symbol-section"}>
                      <Card.Img variant="top" src={validator} />
                      <h5>&nbsp;</h5>
                    </div>
                    <Card.Title className={"mb-3 mt-4"}>
                      Govern with XPRT
                    </Card.Title>
                    <Card.Text>
                      To become the voice of the Persistence community in
                      deciding the future of the network
                    </Card.Text>
                  </div>

                  <div
                    className={"comingsoon cards-buttons button-section mt-2"}
                  >
                    <a
                      href="https://forum.persistence.one/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button"
                    >
                      Forum
                    </a>
                    <a
                      href="https://www.mintscan.io/persistence/proposals"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button-initial button ml-3"
                    >
                      Proposals
                    </a>
                  </div>
                </Card.Body>
              </div>
            </Card>
            <Card className={"h-100"}>
              <div className={"card-section h-100"}>
                <Card.Body>
                  <div>
                    <div className={"symbol-section"}>
                      <Card.Img variant="top" src={community} />
                      <h5>&nbsp;</h5>
                    </div>
                    <Card.Title className={"mb-3 mt-4"}>
                      Become a validator
                    </Card.Title>
                    <Card.Text>To help secure the core-1 chain</Card.Text>
                  </div>
                  <div
                    className={"comingsoon cards-buttons button-section mt-2"}
                  >
                    <a
                      href="https://github.com/persistenceOne/awesome-persistence/blob/main/Validator.md"
                      rel="noopener noreferrer"
                      className="button-initial button"
                    >
                      Docs
                    </a>
                    <a
                      href="https://docs.persistence.one/build/validators/foundation-delegations"
                      rel="noopener noreferrer"
                      className="button-initial button ml-3"
                    >
                      Foundation-delegations
                    </a>
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

export default XPRTEcosystem;
