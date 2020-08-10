import React, { Component } from 'react';
import icon from '../../assets/logo_dark.svg'
import { Link } from 'react-router-dom';
import medium from '../../assets/social-icons/medium.png'
class Footer extends Component {

    render() {

        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 margin-t-20">
                            <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />
                        </div>
                        <div className="col-lg-2 margin-t-20">
                            <h6>About</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><Link to="/team">Team</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 margin-t-20">
                            <h6>Products</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://explorer.persistence.one" rel="noopener noreferrer" target="_blank">Explorer</a></li>
                                    <li><Link to="/content">App</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 margin-t-20">
                            <h6>Official Channels</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank"><span class="mdi mdi-telegram"></span>&ensp;Announcements</a></li>
                                    <li><a href="https://t.me/PersistenceOneChat" rel="noopener noreferrer" target="_blank"><span class="mdi mdi-telegram"></span>&ensp;Community Chat</a></li>
                                    <li><a href="https://www.linkedin.com/company/persistenceone/" rel="noopener noreferrer" target="_blank"><span class="mdi mdi-linkedin"></span>&ensp;LinkedIn</a></li>
                                    <li><a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank"><span class="mdi mdi-twitter"></span>&ensp;Twitter</a></li>
                                    <li><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank"><span class="mdi"><img src={medium} alt="medium" /></span>&ensp;Medium</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 margin-t-20">
                            <h6>Contact Us</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="mailto:hello@persistence.one">hello@persistence.one</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pull-none">
                                    <p className="copy-rights mb-3 mb-sm-0"> © Persistence {new Date().getFullYear()} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;


