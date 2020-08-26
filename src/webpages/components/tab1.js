import React from 'react';
import { Form } from 'react-bootstrap'

class Firsttab extends React.Component {

    render() {

        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Asset Type</Form.Label>
                    <Form.Control as="Select">
                        <option>Select Token Type</option>
                        <option>Deeds</option>
                        <option>Invoices</option>
                        <option>OBL</option>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <button type="submit" class="btn">Tokenize</button>
            </Form>
        )
    };
}
export default Firsttab 
