import React from "react";
import homepageBanner from '../../assets/images1/homepage_banner.png';

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                       
                        <p className="banner-heading"><span>Liquid Staking </span>is the <br/> new Staking</p>
                        <p className="caption">Building an economy around Liquid Proof of Stake assets</p>
                        <p className="text">
                            Persistence is a tendermint/Cosmos-based Layer-1 network powering an ecosystem of DeFi
                            products aimed at making liquid staked assets the default assets of the the PoS economy.
                        </p>


                    </div>
                    <div className="col-md-6 col-sm-12 content">
                        <div>
                        <img src={homepageBanner} alt="curvedBorder" className="banner-video"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;