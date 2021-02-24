import React from "react";
import BackersTabs from "../../components/backers";

const Backers = () => {
    return (
        <section className="our-backers">
            <h3 className="section-title">Who’s backing us?</h3>
            <div className="container">
                <BackersTabs/>
            </div>
        </section>
    )
}
export default Backers;