import React, {useContext} from "react";
import xprt_bg from "../../assets/images1/xprt_bg.svg";
import {Accordion, Card, useAccordionToggle, AccordionContext} from "react-bootstrap";
import Icon from "../../components/Icon";

function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            className="accordion-button"
            onClick={decoratedOnClick}
        >
            <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"}/>

        </button>
    );
}

const Xprt = () => {
    return (
        <>
            <section className="xprt-section">
                <div className="container">
                    <h3 className="section-title">XPRT Token</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <p>
                                    A community-focused initiative designed to facilitate the wide distribution of XPRT
                                    tokens among PoS token holders familiar with staking, thus accelerating the
                                    decentralisation of the Persistence mainnet once live. 1% of the total XPRT token
                                    supply has been allocated for distribution via StakeDrop.
                                </p>
                                <button className="button-primary button" title="Coming Soon" disabled>Learn More
                                </button>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Token utility and Value accrual
                                            </p>
                                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Token utility and Value accrual
                                            </p>
                                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>Persistence will be conducting a public sale/IEO in March 2021.
                                                More details around the XPRT token sale will be released shortly.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={xprt_bg} alt="xprt_bg"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Xprt;