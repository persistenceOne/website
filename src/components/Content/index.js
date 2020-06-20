import React from 'react';
import Typedjs from '../reactTyped/index';
import landing from '../../assets/landing.png';
import './index.css';
import {
    Container, Row, Col,
} from 'reactstrap';

const Content = (props) => {
    return (
        <section className="content_section">
            <Container fluid={true}>
                <Row className="row_height">
                    <Col className="head_title" md={{ size: 6, offset: 1 }} sm="6">
                        <h4 className="sub_title">Creating <span>Trust</span> & <br /><span>Transparency</span> in <br />
Private Markets</h4>
                        <h6 className="head_sub_title">Enabling enterprises <br /> to be <span><Typedjs /></span>

                        </h6>
                    </Col>
                    <Col className="" md={{ size: 5, offset: 0 }} sm="6">

                        <img
                            alt="landing"
                            className="aside_img"
                            src={landing} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;
