import React, {useState} from "react";
import {Modal as ReactModal} from "react-bootstrap";

const Modal = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.setName("");
    };

    return (
        <div>
            <ReactModal show={show} onHide={handleClose} className="info-modal" centered>

                <ReactModal.Body>
                    <div className="modal-data">
                    <button className="close-button" onClick={handleClose}>x</button>
                    <p>regions</p>
                    </div>
                </ReactModal.Body>
            </ReactModal>
        </div>
    );
};

export default Modal;
