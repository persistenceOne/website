import React from "react";
import explorer_new from "../../assets/images/explorer_new.svg";
import people from "../../assets/images/people.svg";
import {
    PERSISTENCEONE_DISCORD_URL,
    PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL,
    PERSISTENCEONE_TELEGRAM_URL,
    PERSISTENCEONE_TWITTER_URL
} from "../../constants/config";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Icon from "../../components/Icon";
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
        url:  PERSISTENCEONE_TELEGRAM_ANNOUNCEMENTS_URL ,
        iconName: 'announcements',
        tooltip: 'announcements'
    }, {
        url:  PERSISTENCEONE_DISCORD_URL ,
        iconName: 'discord',
        tooltip: 'discord'
    }
    // , {
    //     url: PERSISTENCEONE_REDDIT_URL ,
    //     iconName: 'reddit-round',
    //     tooltip: 'reddit'
    // }, {
    //     url:  PERSISTENCEONE_MEDIUM_URL ,
    //     iconName: 'medium-m',
    //     tooltip: 'medium'
    // }, {
    //     url: PERSISTENCEONE_LINKEDIN_URL ,
    //     iconName: 'linkedin-footer',
    //     tooltip: 'linkedIn'
    // },
];


const GrantContent = () => {
    const socialIcon = (iconName) => {
        ReactGa.event({
            category: 'Sociallinks',
            action: 'Clicked on ' + iconName
        })

    }
    return (
     <section className="grant-section">
         <div className="container">
             <h1 className="section-title">Persistence Grant Program</h1>
             <div className="scope-container">
                 <div className="button-heading">
                     <span>Grant Scope</span>
                 </div>
                 <ul className="lists">
                     <li>
                         <p> Anyone can apply for a grant with the Persistence Grant Program</p>
                         <ul>
                             <li>
                                 Currently, however, Persistence grants will majorly support building innovative use-cases and
                                 tools around liquid staked assets
                             </li>
                         </ul>
                     </li>
                     <li>
                         The teams are required to build
                     </li>
                     <li>The funded projects will be required to meet the promised milestones within a agreed-upon timeframe</li>
                     <li>
                        <p> A non-exhaustive list of project ideas that we are looking to fund are:</p>
                         <ul>
                             <li>On-chain data and analytics protocol/dashboard for PoS and liquid staked assets</li>
                             <li>Developer tooling: Serialisation/RPC/IDE/Scaffolding to help builders use the Persistence
                                 stack better
                             </li>
                             <li>
                                 Decentralised exchanges supporting liquid staked stkASSETs
                             </li>
                             <li>
                                 Borrowing/Lending markets for liquid staked stkASSETs
                                 Feature-rich block explorer
                             </li>
                         </ul>
                     </li>
                     <li>
                         Builders are encouraged to apply for a grant if they think their idea(s) align with the broader
                         vision of the Persistence ecosystem to foster a thriving liquid staking economy
                     </li>
                     <li>
                         You can head over to the Persistence forum and community platforms to find and discuss more ideas
                     </li>
                 </ul>
             </div>
             <div className="button-heading">
                 <span>How will we help</span>
             </div>
             <div className="boxes-container">
                 <div className="boxes">
                     <div className="box">
                         <div className="box-content">
                             <p className="box-heading">Technical support</p>
                             <p className="content">Technical support through consistent product development assistance from the
                                 Persistence core team</p>
                         </div>

                     </div>
                     <div className="box">
                         <div className="box-content">
                             <p className="box-heading">Marketing and
                                 promotional support</p>
                             <p className="content">Marketing and promotional support via immediate access to our growing
                                 community and media partnerships</p>
                         </div>
                     </div>
                 </div>
                 <div className="boxes">
                     <div className="box">
                         <div className="box-content">
                             <p className="box-heading">Strategic partnerships</p>
                             <p className="content">Strategic partnerships to validators, accelerators and advisors
                                 within the Persistence ecosystem</p>
                         </div>

                     </div>
                     <div className="box">
                         <div className="box-content">
                             <p className="box-heading">Early build grants </p>
                             <p className="content">Early build grants to develop and scale your project
                                 leveraging the Persistence tech-stack</p>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="process-container">
                 <div className="button-heading">
                     <span>Application Process</span>
                 </div>
                 <h3>Step 1: Application</h3>
                 <p>Write to grants@persistence.one with a detailed application consisting of the following details: </p>
                 <ul>
                     <li>
                         Basic contact information
                     </li>
                     <li>Concise descriptions of the project you are working on</li>
                     <li>Team members’ experience</li>
                     <li>
                         An estimate of the size of grant you are requesting (this is not binding)
                     </li>
                 </ul>
                 <p>The clearer your information, the faster the review can be completed.
                     Please make sure to clarify how your project helps the growth of the Liquid staking economy!</p>
                 <h3>Step 2: Application Review</h3>
                 <p>Our team will review all applications as received, on a rolling basis, determine if more information
                     is required, and then potentially schedule an intro call with the team.</p>
                 <h3>Step 3: Approval / Rejection</h3>
                 <ul>
                     <li>Applicants will be notified via email on the decision of approval / rejection of their proposals.</li>
                     <li>If the application is accepted, our team will follow-up with a call to review specific details
                         around milestones, timelines, and payment schedules.</li>
                 </ul>
                 <h3>Step 4: Follow up</h3>
                 <p>After a grant has been delivered, the Persistence team will reach out at regular intervals for
                     continual developmental support, and milestone check-ins</p>
             </div>
                <div className="bottom-cards">
                    <div className="box">
                        <div className="box-body">
                            <div className="content">
                                <img src={explorer_new} alt="explorer_new"/>
                                <p className="heading">Engage with the Community </p>
                                <p className="content">
                                    The Persistence Software Development Kit (SDK) is a set of standardized modules that
                                    can be used to model marketplaces for the easy exchange of value.
                                </p>
                            </div>
                            <div className="buttons">
                                <button className="button button-primary">
                                    GitHub
                                </button>
                                <button className="button button-primary">
                                    DevChat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-body">
                            <div className="content">
                                <img src={people} alt="people"/>
                                <p className="heading">Explore Persistence SDK </p>
                                <p className="content">
                                    Be a part of our Community
                                    Keep tabs on all-things-Persistence.
                                </p>
                            </div>
                            <div className="social-icons">
                                <ul className="list-unstyled social-list">
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

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
     </section>
    )
}
export default GrantContent;