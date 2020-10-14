import React, { Component } from 'react';
import language from '../translationlang';
import { connect } from 'react-redux';
import icon from '../../assets/logo_dark.svg'
import whitepaper from '../../whitepaper.pdf'
import { Link } from 'react-router-dom';
import Icon from '../icon';
class Footer extends Component {

    render() {
        const { lang } = this.props;
        return (
            <footer className="footer">
                <div className="container">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-xs-12 col-md-2 col-lg-3 margin-t-20">
                            <img className="dark-logo" src={icon} alt="icon-logo" title="logo" />
                        </div>
                        <div className="col-xs-6 col-md-2 col-lg-2 margin-t-20">
                            <h6>{language[lang].about}</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><Link to="/team">{language[lang].team}</Link></li>
                                    <li><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank">{language[lang].blog}</a></li>
                                    <li><Link to="/roadmap">{language[lang].roadmap}</Link></li>


                                </ul>
                                <h6 className="resources">{language[lang].resources}</h6>
                                <ul className="list-unstyled footer-list">
                                    <li><a href={whitepaper} target="_blank" rel="noopener noreferrer">{language[lang].whitepaper}</a></li>
                                    <li><a href="https://github.com/persistenceOne" rel="noopener noreferrer" target="_blank">{language[lang].git_hub}</a></li>
                                    <li><a href="https://drive.google.com/drive/folders/1cciqYsxlfbk0OlELPKgdGkXC91Clk8yl" rel="noopener noreferrer" target="_blank">{language[lang].press_kit}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-2 col-lg-2 margin-t-20">
                            <h6>{language[lang].products}</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://explorer.persistence.one" rel="noopener noreferrer" target="_blank">{language[lang].explorer}</a></li>
                                    <li><Link to="/stakedrop">{language[lang].stake_drop}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 margin-t-20">
                            <h6>{language[lang].official_channels}</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="https://t.me/PersistenceOne" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="telegram-plane" />&ensp;{language[lang].announcements}</a></li>
                                    <li><a href="https://t.me/PersistenceOneChat" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="telegram-plane" />&ensp;{language[lang].community_chat}</a></li>
                                    <li><a href="https://www.linkedin.com/company/persistenceone/" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="linkedin" />&ensp;{language[lang].linked_in}</a></li>
                                    <li><a href="https://twitter.com/PersistenceOne" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="twitter-logo" />&ensp;{language[lang].twitter}</a></li>
                                    <li><a href="https://medium.com/persistence-blog" rel="noopener noreferrer" target="_blank"><Icon viewClass="social_icon_imgg" icon="medium-m" />&ensp;{language[lang].medium}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 margin-t-20">
                            <h6>{language[lang].contact_us}</h6>
                            <div className="text-muted margin-t-20">
                                <ul className="list-unstyled footer-list">
                                    <li><a href="mailto:hello@persistence.one">hello@persistence.one</a></li>

                                </ul>
                            </div>
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



const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default (connect(mapStateToProps)(Footer));
