import React, {useContext} from "react";
import {Accordion, Card, useAccordionToggle, AccordionContext} from "react-bootstrap";
import Icon from "../../../components/Icon";
import qr from "../../../assets/images1/qrcode.jpg";
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

const RegionalDropdown = () => {
    return (

        <Accordion>
            <Card>
                <Card.Header>
                    <p>
                        Chinese
                    </p>
                    <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                            <img src={qr} alt="qr-code"/>
                            <p>Send us a request to be added to the WeChat community</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>

    )
}
export default RegionalDropdown;