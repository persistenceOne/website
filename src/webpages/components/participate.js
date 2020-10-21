
import React, { Component } from 'react';
import Icon from '../icon';



class Participate extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <section className="participate-stakedrop">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="row campaign-main">
                                    <div className="col-lg-12 campaign-card">
                                        <div className="card-inner">
                                            <h6>Campaign Time Left</h6>
                                            <h1>20 Days 15 Hours</h1>
                                        </div>
                                        <Icon viewClass="social_icon_imgg" icon="participate" />

                                    </div>
                                </div>
                                <div className="row campaign-maintwo">
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>$XPRT Allocation/Rewards Pool</h6>
                                            <h1>200,000 $XPRT</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>Staking Token</h6>
                                            <h1>ATOM</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>Campaign Duration</h6>
                                            <h1>30 Days</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>Today’s $XPRT Rewards</h6>
                                            <h1>2000 $XPRT</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>Total ATOM Staked</h6>
                                            <h1>- -</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 card-content">
                                        <div className="participate-cardtwo">
                                            <h6>ATOM Staked on AUDIT.one</h6>
                                            <h1>- -</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Participate;


