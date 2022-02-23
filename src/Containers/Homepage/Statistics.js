import React from "react";
import chart from "../../assets/images/chart.svg";

const Statistics = () => {
    return (
        <section className="statistics-section">
            <h3 className="section-title">Proof-of-Stake and Liquid Staking<br/>
                Market Capitalisation</h3>
            <div className="container">
                <div className="img-section">
                    <img src={chart} alt="chart"/>
                    <p className="content">The rapid growth of the PoS space has positioned liquid staking industry
                        at the inflection point.</p>
                </div>
            </div>
        </section>
    )
};

export default Statistics;