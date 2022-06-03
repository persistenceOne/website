import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import pastakelogo from '../../assets/images1/pstake-logo-symbol.svg';
import borrow from '../../assets/images1/borrow.svg';
import dex from '../../assets/images1/dex.svg';

const Ecosystem = () => {
    return (
        <section className="home-ecosystem-section">
            <div className="container">
                <h3 className="section-title">Maximise Capital Efficiency</h3>
                <p className="sub-heading">The Persistence ecosystem application bridging Staking and DeFi </p>
                <div className="card-tiles">
                    <CardGroup>
                        <Card className={'h-100'}>
                            <div className={'card-section'}>
                            <Card.Body >
                                <Card.Img variant="top" src={pastakelogo} />
                                <Card.Title className={'mb-3 mt-4'}>Liquid Staking Protocol</Card.Title>
                                <Card.Text>
                                    Unlocking Liquidity for Staked Assets. Bringing PoS assets to DeFi.
                                </Card.Text>
                                <div className={"button-section mt-5"}>
                                    <a href="/grants" rel="noopener noreferrer"
                                       target="_blank" className="button-initial button">
                                        GO TO APP
                                    </a>
                                    <a href="/grants" rel="noopener noreferrer"
                                       target="_blank" className="button-initial button two">
                                        Explore
                                    </a>
                                </div>
                            </Card.Body>
                            </div>

                        </Card>
                        <Card className={'h-100'}>
                            <div className={'card-section h-100'}>
                            <Card.Body >
                                <div className={"symbol-section"}>
                                <Card.Img variant="top" src={borrow} />
                                    <h5>Borrow & Lend</h5>
                            </div>
                                <Card.Title className={'mb-3 mt-4'}>Borrowing & Lending protocol</Card.Title>
                                <Card.Text>
                                    Borrowing and Lending Protocol for staked assets.
                                </Card.Text>
                                <div className={"comingsoon mt-5"}>
                                    <h6>COMING SOON!</h6>
                                </div>
                            </Card.Body>
                            </div>
                        </Card>
                        <Card className={'h-100'}>
                            <div className={'card-section h-100'}>
                            <Card.Body >
                                <div className={"symbol-section"}>
                                <Card.Img variant="top" src={dex} />
                                    <h5>Dex</h5>
                            </div>
                                <Card.Title className={'mb-3 mt-4'}>DEX focused on staked assets</Card.Title>
                                <Card.Text>
                                    Interchain DEX for staked assets.
                                </Card.Text>

                                <div className={"comingsoon mt-5"}>
                                    <h6>COMING SOON!</h6>
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