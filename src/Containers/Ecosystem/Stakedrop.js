import React from "react";
import stakedrop from "../../assets/images1/stakedrop.svg"
import {NavLink} from "react-router-dom";
const Stakedrop = () => {
    return (
        <>
            <section className="stakedrop-info-section">
                <div className="title-line-section">
                    <h3 className="section-title">STAKEDROP</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={stakedrop} alt="stakedrop" className="stakedrop-image"/>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="info">
                                <p>
                                    A community-focused initiative designed to facilitate the wide distribution of XPRT
                                    tokens among PoS token holders familiar with staking, thus accelerating the
                                    decentralisation of the Persistence mainnet once live. 1% of the total XPRT token
                                    supply has been allocated for distribution via StakeDrop.
                                </p>
                                <NavLink to="/stakedrop" className="button-primary button">Participate</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Stakedrop;