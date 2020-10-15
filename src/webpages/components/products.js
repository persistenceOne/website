import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapvideo from '../../assets/map.mp4';
import language from '../translationlang';
import comdex from '../../assets/comdex.svg'
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
            <div>
                <section className="section-products" id="useCases">
                    <h3>{language[lang].usecase}</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 comdex-section">
                            <div className="align-center ">
                                <img src={comdex} alt="comdex" title="comdex"></img>
                                <div className="comdex-button">
                                    <p className="section-subtitle">Decentralised commodities trading and trade financing platform  </p>
                                    <a className="btn-link" href="https://comdex.sg/" rel="noopener noreferrer" target="_blank">comdex.sg  <img src={arrow} alt="go to website arrow" /></a>
                                </div>
                            </div>
                            </div>
                            <div className="map-section col-md-12 col-lg-8">
                            <video className="media-element" autoPlay="autoplay" preload loop="loop" muted src={mapvideo}>
                                <source type="video/webm" src={mapvideo}/>
                                <source type="video/mp4" src={mapvideo}/>
                                    <source type="video/ogg" src={mapvideo}/>
                            </video>
                            </div>
                    
                        </div>
                        <div className="row media-blocks">
                                    <div className="margin-t-20 col-md-3 col-lg-3 media-block first-div"><div className="services-list"><div className="media">
                                        <div className="media-body">
                                            <h5>$41M+</h5>                                         
                                            <p>{language[lang].transform_volume}</p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="margin-t-20 col-md-3 col-lg-3 media-block first-div"><div className="services-list"><div className="media">
                                        <div className="media-body "><h5>12+</h5>
                                            <p>{language[lang].trading_organizations}</p>
                                        </div></div></div></div>
                                    <div className="margin-t-20 col-md-3 col-lg-3 media-block"><div className="services-list"><div className="media">
                                        <div className="media-body"><h5>35+</h5>
                                            <p>{language[lang].institutional_traders}</p>
                                        </div></div></div></div>
                                    <div className="margin-t-20 col-md-3 col-lg-3 media-block"><div className="services-list"><div className="media">
                                        <div className="media-body"><h5>$200M+</h5>
                                            <p>{language[lang].project_volume} 2021</p></div></div></div></div>
                                </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(Products);