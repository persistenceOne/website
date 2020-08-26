import React, { Component } from 'react';
import icon from '../../assets/logo_dark.svg'
import whitepaper from '../../whitepaper.pdf'
import { Link } from 'react-router-dom';
import Icon from '../icon';
class Footer extends Component {

    render() {

        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-3 margin-t-20">
                            <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />
                        </div>
                        <div className="col-md-2 col-lg-2 margin-t-20">
                            <h6>About</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><Link to="/team">Team</Link></li>
                                    <li><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank">Blog</a></li>
                                    <li><Link to="/roadmap">Roadmap</Link></li>


                                </ul>
                                <h6 className="resources">Resources</h6>
                                <ul className="list-unstyled footer-list">
                                    <li><a href={whitepaper} target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                                    <li><a href="https://github.com/persistenceOne" rel="noopener noreferrer" target="_blank">Github</a></li>
                                    <li><a href="https://drive.google.com/drive/folders/1cciqYsxlfbk0OlELPKgdGkXC91Clk8yl" rel="noopener noreferrer" target="_blank">Press Kit</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 margin-t-20">
                            <h6>Products</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://explorer.persistence.one" rel="noopener noreferrer" target="_blank">Explorer</a></li>
                                    <li><Link to="/content">App</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 margin-t-20">
                            <h6>Official Channels</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="telegram-plane" />&ensp;Announcements</a></li>
                                    <li><a href="https://t.me/PersistenceOneChat" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="telegram-plane" />&ensp;Community Chat</a></li>
                                    <li><a href="https://www.linkedin.com/company/persistenceone/" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin" />&ensp;LinkedIn</a></li>
                                    <li><a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo" />&ensp;Twitter</a></li>
                                    <li><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="medium-m" />&ensp;Medium</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 margin-t-20">
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


