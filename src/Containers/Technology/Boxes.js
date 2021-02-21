import React from "react";
import circle from "../../assets/images1/technology/circle.svg"
import square from "../../assets/images1/technology/square.svg"
import triangle from "../../assets/images1/technology/triangle.svg"

const Boxes = () => {
    return (
        <section className="technology-section-boxes">
            <div className="container ">
                <div className="boxes">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                        <img src={circle} alt="box_build"/>
                        <p>Chain sovereignty</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box box2">
                        <img src={square} alt="box_build"/>
                        <p>Business usability </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="box">
                        <img src={triangle} alt="box_build"/>
                        <p>Abstraction of complexities around public blockchains</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Boxes;