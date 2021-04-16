import React, {useContext} from "react";
import {Accordion, Card, useAccordionToggle, AccordionContext} from "react-bootstrap";
import Icon from "../../components/Icon";
import {useTranslation} from "react-i18next";

function ContextAwareToggle({children, eventKey, callback}) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            className="accordion-button"
            onClick={decoratedOnClick}
        >
            <Icon viewClass="icon" icon={isCurrentEventKey ? "minus" : "plus"}/>

        </button>
    );
}

const TokenTitle = () => {
    const {t} = useTranslation();
    return (
        <section className="xprt-banner-ecosystem ecosystem-faq-section" data-aos="fade-up">
            <div className="container">
               
                <h3 className="section-title">{t("ROLE_OF_XPRT")}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="info">
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <p>
                                            {t("FAQ3_QUESTION")}
                                        </p>
                                        <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{t("FAQ3_ANSWER")}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <p>
                                            {t("FAQ4_QUESTION")}
                                        </p>
                                        <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <p>{t("FAQ4_ANSWER")}
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <p>
                                            {t("FAQ5_QUESTION")}
                                        </p>
                                        <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <p>{t("FAQ5_ANSWER")}
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TokenTitle;