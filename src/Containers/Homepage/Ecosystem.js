import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import pastakelogo from '../../assets/images1/pstake-logo-symbol.svg';
import atom from '../../assets/images1/atom.svg';
import eth from '../../assets/images1/eth.svg';
import sol from '../../assets/images1/sol.svg';
import bnb from '../../assets/images1/bnb.svg';
import avax from '../../assets/images1/avax.svg';

const Ecosystem = () => {
    return (
        <section className="home-ecosystem-section">
            <div className="container">
                <h3 className="section-title">Maximise Capital Efficiency</h3>
                <p className="sub-heading">Persistence ecosystem applications are bridging Staking and DeFi</p>
                <div className="card-tiles">
                    <CardGroup className={'col-md-12'}>
                        <Card className={'h-100'}>
                            <div className={'card-section'}>
                            <Card.Body >
                                <Card.Img variant="top" src={pastakelogo} />
                                <Card.Text className={'mb-3 mt-4'}>
                                    <span>pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can now stake their assets while maintaining the liquidity of these assets.</span>

                                </Card.Text>
                                <div className={'networks mt-4'}>
                                    <h5><span>Building&nbsp;on&nbsp;</span><img src={eth} alt="ETH" title="ETH"/><img src={bnb} alt={"BNB"} title="BNB"/><img src={atom} alt="Atom" title="Atom"/><img src={sol} alt="Solana" title="Solana"/><img src={avax} alt="Avalanche" title="Avalanche"/></h5>
                                    <div className={"button-section"}>
                                        <a href="https://app.pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            GO TO APP
                                        </a>
                                        <a href="https://pstake.finance/" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button two">
                                            Explore
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