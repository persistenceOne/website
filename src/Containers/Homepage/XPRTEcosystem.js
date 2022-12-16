import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import validator from '../../assets/images1/validatoricon.svg';
import community from '../../assets/images1/community.svg';
import build from '../../assets/images1/buildon.svg';
import Icon from "../../components/Icon";
import {
    PERSISTENCEONE_DISCORD_URL, PERSISTENCEONE_GITHUB_URL, PERSISTENCEONE_MEDIUM_URL, PERSISTENCEONE_REDDIT_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL, PERSISTENCEONE_YOUTUBE_URL
} from "../../constants/config";
import ReactGa from "react-ga4";
const socialList = [
    {
        url: PERSISTENCEONE_TWITTER_URL,
        iconName: 'twitter-logo',
        tooltip: 'twitter'
    },
    {
        url: PERSISTENCEONE_YOUTUBE_URL,
        iconName: 'youtube',
        tooltip: 'youtube'
    },
    {
        url: PERSISTENCEONE_MEDIUM_URL,
        iconName: 'mediumlink',
        tooltip: 'medium'
    },
    {
        url: PERSISTENCEONE_REDDIT_URL,
        iconName: 'reddit-round',
        tooltip: 'reddit'
    },
    {
        url: PERSISTENCEONE_TELEGRAM_URL,
        iconName: 'telegram-plane',
        tooltip: 'telegram'
    },
    {
        url:  PERSISTENCEONE_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url: PERSISTENCEONE_GITHUB_URL,
        iconName: 'github',
        tooltip: 'github'
    }
];
const socialIcon = (iconName) => {
    ReactGa.event({
        category: 'Sociallinks',
        action: 'Clicked on ' + iconName
    })

}
const XPRTEcosystem = () => {
    return (
        <section className="home-ecosystem-section xprtecosystem">
            <div className="container">
                <h3 className="section-title">Get Involved In the Persistence Ecosystem. Powered by <span className={"subt"}>X<span>P</span>RT</span> </h3>
                <p className="sub-heading"></p>
                <div className="card-tiles">
                    <CardGroup>
                        <Card className={'h-100'}>
                            <div className={'card-section'}>
                                <Card.Body >
                                    <div className={"symbol-section"}>
                                        <Card.Img variant="top" src={build} />

                                    <h5>&nbsp;</h5>
                                    </div>

                                    <Card.Title className={'mb-3 mt-4'}>Build on Persistence</Card.Title>
                                    <Card.Text>
                                        to realise innovative use-cases for stkASSETs
                                    </Card.Text>
                                    <div className={"button-section cards-buttons mt-5"}>
                                        <a href="https://drive.google.com/file/d/12cjxcyqFdVDY55i4Wh_31k9viVciemRr/view" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            ECOSYSTEM GRANTS
                                        </a>
                                        <a href="https://github.com/persistenceOne/persistenceCore" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button ml-3">
                                            GITHUB
                                        </a>
                                    </div>
                                </Card.Body>
                            </div>

                        </Card>
                        <Card className={'h-100'}>
                            <div className={'card-section h-100'}>
                                <Card.Body >
                                    <div className={"symbol-section"}>
                                        <Card.Img variant="top" src={validator} />
                                        <h5>&nbsp;</h5>
                                    </div>
                                    <Card.Title className={'mb-3 mt-4'}>Become a Validator</Card.Title>
                                    <Card.Text>
                                        to help secure the core-chain
                                    </Card.Text>

                                    <div className={"comingsoon cards-buttons button-section mt-5"}>
                                        <a href="https://github.com/persistenceOne/awesome-persistence/blob/main/Validator.md" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            DOCS
                                        </a>
                                        <a href="https://drive.google.com/file/d/1ZhbBaViq0a6_ZR2_CSmzrWjfQ4_klzj8/view" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button ml-3">
                                            FOUNDATION DELEGATION
                                        </a>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                        <Card className={'h-100'}>
                            <div className={'card-section h-100'}>
                                <Card.Body >
                                    <div className={"symbol-section"}>
                                        <Card.Img variant="top" src={community} />
                                        <h5>&nbsp;</h5>
                                    </div>
                                    <Card.Title className={'mb-3 mt-4'}>Persistence Community</Card.Title>
                                    <Card.Text>

                                                <div className="links">
                                                    {
                                                        socialList.map((item, index) => (
                                                                <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                                   target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                         icon={item.iconName} /></a>
                                                        ))
                                                    }


                                        </div>
                                    </Card.Text>

                                    <div className={"comingsoon cards-buttons button-section mt-5"}>
                                        <a href="/ecosystem" rel="noopener noreferrer" className="button-initial button">
                                            ECOSYSTEM
                                        </a>
                                        <a href="https://bit.ly/38VBfme" rel="noopener noreferrer"
                                            className="button-initial button ml-3">
                                            GUARDIAN PROGRAM
                                        </a>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default XPRTEcosystem;