import React, { Component } from 'react';
import {connect} from 'react-redux';
import language from '../translationlang';
import comdex from '../../assets/comdex.svg'
import map from '../../assets/map_full.png'
import arrow from '../../assets/arrow2.png'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        const { lang } = this.props;
       
        return (
            <React.Fragment>
                <section className="section-products" id="useCases">
                    <h3>{language[lang].usecase}</h3>
                    <div className="container">
                        <div className="align-items-center">
                            <div className="align-center comdex-section">
                                <img src={comdex} alt="comdex" title="comdex"></img>
                                <div className="comdex-button">
                                    <p className="section-subtitle">{language[lang].decentralized_commodites}</p>
                                    <a href="https://comdex.sg/" rel="noopener noreferrer" target="_blank">comdex.sg  <img src={arrow} alt="go to website arrow" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row media-blocks">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="margin-t-20 col-md-6 col-lg-6 media-block first-div"><div className="services-list"><div className="media">
                                        <div className="media-body">
                                            <h5>$30M+</h5>                                         
                                            <p>{language[lang].transform_volume}</p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="margin-t-20 col-md-6 col-lg-6 media-block first-div"><div className="services-list"><div className="media">
                                        <div className="media-body "><h5>10+</h5>
                                            <p>{language[lang].trading_organizations}</p>
                                        </div></div></div></div>
                                    <div className="margin-t-20 col-md-6 col-lg-6 media-block"><div className="services-list"><div className="media">
                                        <div className="media-body"><h5>30+</h5>
                                            <p>{language[lang].institutional_traders}</p>
                                        </div></div></div></div>
                                    <div className="margin-t-20 col-md-6 col-lg-6 media-block"><div className="services-list"><div className="media">
                                        <div className="media-body"><h5>$200M+</h5>
                                            <p>{language[lang].project_volume}</p></div></div></div></div>
                                </div>
                            </div>
                            <div className="map-section col-md-12 col-lg-5">
                                <img src={map} alt="map" title="map"></img>
                            </div>

                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(Products);