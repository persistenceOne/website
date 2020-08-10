import React from 'react';
import { Form } from 'react-bootstrap'

import exchangeIcon from '../../assets/exchange-icon.png'

class SecondTab extends React.Component {

    render() {

        return (
            <div className="exchange-container">
                <Form>
                    <div className="paying-section">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>You Pay</Form.Label>
                            <Form.Control as="Select">
                                <option>Deeds</option>
                                <option>Invoices</option>
                                <option>OBL</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="0" />
                        </Form.Group>


                    </div>
                    <div className="icon"><img src={exchangeIcon} alt="echange-icon" /></div>
                    <div className="receive-section">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>You Recive</Form.Label>
                            <Form.Control as="Select">
                                <option>USDC</option>
                                <option>USDT</option>
                                <option>DAI</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="0" />
                        </Form.Group>


                    </div>
                    <button type="submit" class="btn">Make Swap</button>
                </Form>
            </div>
        )
    };
}
export default SecondTab 
