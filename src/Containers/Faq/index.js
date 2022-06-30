import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionToggle} from "react-bootstrap";
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

const Faq = () => {
    return (
        <>
            <section className="xprt-banner-ecosystem ecosystem-faq-section" data-aos="fade-up">
                <div className="container">
                    <h1 className="section-title">FAQs</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What is Persistence?
                                            </p>
                                            <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Persistence is a Tendermint based layer-1 chain, with a goal to
                                                build an ecosystem of decentralised applications that together accrue
                                                value to XPRT.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What consensus mechanism does Persistence use?
                                            </p>
                                            <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>
                                                    Persistence uses Tendermint dPOS BFT Consensus Mechanism
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Is Persistence an IBC enabled chain?
                                            </p>
                                            <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p>
                                                    Yes, Persistence is an IBC-enabled chain
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What is the Persistence vision?
                                            </p>
                                            <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p>
                                                    The broader vision of Persistence is to become the liquid staking
                                                    hub of the PoS space, making liquid staked stkASSETs the default
                                                    assets of the staking economy.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What is the inflation rate on the Persistence network?
                                            </p>
                                            <ContextAwareToggle eventKey="4">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <p>
                                                    ~31%
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                How does XPRT accrue value
                                            </p>
                                            <ContextAwareToggle eventKey="5">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <p>
                                                    XPRT accrues value from the economic activity within the Persistence
                                                    ecosystem of applications, through multiple channels like transaction
                                                    fees, fee sharing with ecosystem dApps, IBC hub-routing, etc.
                                                </p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Where can I buy XPRT?
                                            </p>
                                            <ContextAwareToggle eventKey="6">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                <p>
                                                    $XPRT is currently listed on the following platforms:
                                                </p>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://www.huobi.com/en-in/exchange/xprt_usdt"
                                                           rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Huobi Global</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.kucoin.com/trade/XPRT-USDT"
                                                           rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">KuCoin</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://info.osmosis.zone/token/XPRT" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Osmosis</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://dex.sifchain.finance/#/swap?from=uxprt&to=rowan&slippage=1.0" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Sifchain</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://ascendex.com/en/cashtrade-spottrading/usdt/xprt" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">AscendX</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.gate.io/trade/XPRT_USDT" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Gate.io</a>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                Which wallets support $XPRT?
                                            </p>
                                            <ContextAwareToggle eventKey="7">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <p>
                                                    $XPRT is supported by:
                                                </p>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://wallet.persistence.one" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">https://wallet.persistence.one</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://wallet.keplr.app/" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Keplr</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.cosmostation.io" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Cosmostation</a>
                                                    </li>
                                                    <li>
                                                        <p className="m-0">Ledger</p>
                                                    </li>
                                                    <li>
                                                        <a href="https://wallet.coin98.com" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Coin98</a>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What Currently, Persistence Ecosystem of projects includes
                                            </p>
                                            <ContextAwareToggle eventKey="8">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>
                                                <ul className="links">
                                                    <li>
                                                        <a href="https://pstake.finance" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">pSTAKE</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://assetmantle.one" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">AssetMantle </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://comdex.one/home" rel="noopener noreferrer"
                                                           target="_blank"
                                                           className="button">Comdex</a>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What was the StakeDrop campaign?
                                            </p>
                                            <ContextAwareToggle eventKey="9">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body>StakeDrop was a token distribution mechanism that allowed token
                                                holders of some of the most prominent Proof-of-Stake networks to get
                                                exposure to XPRT (native Persistence tokens).</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <p>
                                                What networks were part of the StakeDrop campaign?
                                            </p>
                                            <ContextAwareToggle eventKey="10">Click me!</ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>Terra, Kava, Polygon, and Cosmos were part of the stakedrop
                                                campaign</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faq;