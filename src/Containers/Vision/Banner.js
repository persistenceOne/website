import React from "react";
import visionbg from "../../assets/images1/visionbg.svg";
import curved_line from "../../assets/images1/curvedBorder.svg"

const Banner = () => {
    return (
        <section className="vision-banner-section" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 content">
                        <h3 className="heading">Mission & Vision</h3>
                        <p>The Internet disintermediated the Media & Communications Industry. Using HTTP, SMTP, TCP/IP
                            as the foundational layers, the cost of information exchange was significantly lowered.</p>
                        <p>Persistence is leveraging the Blockchain technology to facilitate seamless asset exchange.
                            Using Web 3.0 Protocols, Persistence aims to enable and create a suite of bleeding edge
                            financial products ranging from Staking-as-an-asset class, Digital Art to Tokenized
                            ‘real-world’ debt.</p>
                        <div className="quote-section">
                            <p className="quote-text">Data flows like water today.
                                <span> Digital assets flow like water tomorrow.</span>
                            </p>
                            <img src={curved_line} alt="curved_line"/>
                        </div>
                    </div>
                    <div className="col-md-4 image-section text-right">
                        <img src={visionbg} alt="visionbg"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;