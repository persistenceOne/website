import React, { Component } from 'react';
import comdex from '../../assets/comdex.svg'
import map from '../../assets/map.png'
import arrow from '../../assets/arrow2.png'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-products" id="useCases">
                    <h3>Use cases</h3>
                    <div className="container">
                        <div className="align-items-center">
                            <div className="align-center comdex-section">
                                <img src={comdex} alt="comdex" title="comdex"></img>
                                <div className="comdex-button">
                                    <p className="section-subtitle">Decentralized commodities trading and trade financing platform</p>
                                    <a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank">comdex.sg  <img src={arrow} alt="go to website arrow" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row media-blocks">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div class="margin-t-20 col-lg-6 media-block first-div"><div class="services-list"><div class="media">
                                        <div class="media-body">
                                            <h5>30M+</h5>
                                            <p>Transaction Volume</p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="margin-t-20 col-lg-6 media-block first-div"><div class="services-list"><div class="media">
                                        <div class="media-body "><h5>10+</h5>
                                            <p>Trading Organizations</p>
                                        </div></div></div></div>
                                    <div class="margin-t-20 col-lg-6 media-block"><div class="services-list"><div class="media">
                                        <div class="media-body"><h5>30+</h5>
                                            <p>Institutional Traders</p>
                                        </div></div></div></div>
                                    <div class="margin-t-20 col-lg-6 media-block"><div class="services-list"><div class="media">
                                        <div class="media-body"><h5>$200M+</h5>
                                            <p>Projected Volume</p></div></div></div></div>
                                </div>
                            </div>
                            <div className="map-section col-lg-5">
                                <img src={map} alt="map" title="map"></img>
                            </div>





                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Products;