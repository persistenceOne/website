import React, {useState} from "react";
import Tushar from "../../assets/images1/pics/tushar.png"
import deepanshu from "../../assets/images1/pics/deepanshu.png"
import abhinav from "../../assets/images1/pics/abhinav.png"
import sudheer from "../../assets/images1/pics/sudheer.png"
import puneet from "../../assets/images1/pics/puneet.png"
import prashant from "../../assets/images1/pics/prashanth.png"
import raju from "../../assets/images1/pics/raju.png"
import mikhil from "../../assets/images1/pics/mikhil.png"
import abhitej from "../../assets/images1/pics/abhitej.png"
import Icon from "../../components/Icon";
import Modal from "./Modals";

const Team = () => {
    const [name, setName] = useState("");

    const handleModalData = (name) => {
        setName(name)
    }

    return (
        <section className="vision-section-team">
            <div className="container">
                <h3 className="section-title">Team Behind Persistence</h3>
                <div className="profiles">
                    <div className="profile" data-aos="fade-up">
                        <img src={Tushar} alt="box_build"/>
                        <p className="name">Tushar Aggarwal</p>
                        <p className="role">CEO</p>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("tushar")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/Tushar307" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/tushar-aggarwal-2823b02b/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={deepanshu} alt="box_build"/>
                        <p className="name">Deepanshu Tripati</p>
                        <p className="role">CTO</p>
                        <div className="image-overlay">
                            <p onClick={() => handleModalData("deepanshu")}>Read More</p>
                            <div className="icons">
                                <a className="icon-box" href="https://twitter.com/deepanshutr" rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo"/></a>
                                <a className="icon-box" href="https://www.linkedin.com/in/deepanshutr/"
                                   rel="noopener noreferrer"
                                   target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin-footer"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={abhinav} alt="box_build"/>
                        <p className="name">Abhinav Kumar</p>
                        <p className="role">Developer</p>
                    </div>

                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={prashant} alt="box_build"/>
                        <p className="name">Prashant</p>
                        <p className="role">Developer</p>
                    </div>

                    <div className="profile" data-aos="fade-up">
                        <img src={puneet} alt="box_build"/>
                        <p className="name">Puneet Mahajan</p>
                        <p className="role">Developer</p>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={raju} alt="box_build"/>
                        <p className="name">Raju Vemula</p>
                        <p className="role">Developer</p>
                    </div>
                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={sudheer} alt="box_build"/>
                        <p className="name">Sudheer Darla</p>
                        <p className="role">UI/UX Designer</p>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={abhitej} alt="box_build"/>
                        <p className="name">Abhitej Singh</p>
                        <p className="role">Strategy & Community</p>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={mikhil} alt="box_build"/>
                        <p className="name">Mikhil Panday</p>
                        <p className="role">Marketing</p>
                    </div>
                </div>
                <div className="profiles" data-aos="fade-up">
                    <div className="profile">
                        <img src={Tushar} alt="box_build"/>
                        <p className="name">Tushar Aggarwal</p>
                        <p className="role">CEO</p>
                    </div>

                    <div className="profile" data-aos="fade-up">
                        <img src={Tushar} alt="box_build"/>
                        <p className="name">Tushar Aggarwal</p>
                        <p className="role">CEO</p>
                    </div>
                    <div className="profile" data-aos="fade-up">
                        <img src={Tushar} alt="box_build"/>
                        <p className="name">Tushar Aggarwal</p>
                        <p className="role">CEO</p>
                    </div>
                </div>
            </div>
            {
                name ?
                    <Modal setName={setName} name={name}/> :
                    null
            }
        </section>
    )
}
export default Team;