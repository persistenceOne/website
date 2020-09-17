import React from 'react';
import { Form } from 'react-bootstrap'
import {connect} from 'react-redux';
import language from '../translationlang';

class Firsttab extends React.Component {

    render() {
        const { lang } = this.props;
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>{language[lang].asset_type}</Form.Label>
                    <Form.Control as="Select">
                        <option>{language[lang].select_token_type}</option>
                        <option>{language[lang].deeds}</option>
                        <option>{language[lang].invoices}</option>
                        <option>{language[lang].obl}</option>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>{language[lang].name}</Form.Label>
                    <Form.Control type="name" placeholder={language[lang].enter_name} />
                </Form.Group>
                <button type="submit" class="btn">Tokenize</button>
            </Form>
        )
    };
}
const mapStateToProps = state => {
    return {
        lang: state.language.language,
    }
};

export default connect(mapStateToProps)(Firsttab);