import React from 'react';
import {Card, CardGroup, OverlayTrigger, Tooltip} from 'react-bootstrap';
import validator from '../../assets/images1/validatoricon.svg';
import community from '../../assets/images1/community.svg';
import Icon from "../../components/Icon";
import {
    PERSISTENCEONE_DISCORD_URL, PERSISTENCEONE_GITHUB_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL
} from "../../constants/config";
import ReactGa from "react-ga";
const socialList = [
    {
        url: PERSISTENCEONE_TWITTER_URL,
        iconName: 'twitter-logo',
        tooltip: 'twitter'
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
                <h3 className="section-title">Get Involved In <span>Persistence EcosystemM</span></h3>
                <p className="sub-heading">Powered by XPRT</p>
                <div className="card-tiles">
                    <CardGroup>
                        <Card className={'h-100'}>
                            <div className={'card-section'}>
                                <Card.Body >
                                    <div className={"symbol-section"}>
                                        <Card.Img variant="top" src={validator} />
                                        <h5>&nbsp;</h5>
                                    </div>

                                    <Card.Title className={'mb-3 mt-4'}>Build on Persistence</Card.Title>
                                    <Card.Text>
                                        to realise innovative use-cases for stkASSETs
                                    </Card.Text>
                                    <div className={"button-section mt-5"}>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            GRANTS
                                        </a>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button two">
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

                                    <div className={"comingsoon button-section mt-5"}>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            DOCS
                                        </a>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button two">
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
                                                            <OverlayTrigger
                                                                key={item.iconName}
                                                                placement="bottom"
                                                                overlay={
                                                                    <Tooltip id={`tooltip-${item.iconName}}`}>
                                                                        {item.tooltip}
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                                                   target="_blank"><Icon viewClass="social_icon_imgg"
                                                                                         icon={item.iconName} /></a>
                                                            </OverlayTrigger>
                                                        ))
                                                    }


                                        </div>
                                    </Card.Text>

                                    <div className={"comingsoon button-section mt-5"}>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button">
                                            ECOSYSTEM
                                        </a>
                                        <a href="/grants" rel="noopener noreferrer"
                                           target="_blank" className="button-initial button two">
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