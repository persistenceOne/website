import React, {useState} from "react";
import {Modal as ReactModal} from "react-bootstrap";
import RegionalDropdown from "./RegionalDropdown";
const Modal = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.setName("");
    };

    return (
        <div className="regional-modal">
            <ReactModal show={show} onHide={handleClose} className="info-modal" centered>

                <ReactModal.Body className="regional-modal-body">
                    <button className="close-button" onClick={handleClose}>x</button>
                    <div className="modal-data">
                        <div className="chinese-dropdown">
                            <RegionalDropdown/>
                        </div>

                        <div className="regionals">
                        <div className="regional-box">
                            <a className="text" href="https://t.me/PersistenceOneVietnam" rel="noopener noreferrer" target="_blank">Vietnamese</a>
                        </div>
                           <div className="regional-box">
                               <a className="text" href="https://t.me/PersistenceRussia" rel="noopener noreferrer" target="_blank">Russian</a>
                           </div>
                           <div className="regional-box">
                               <a className="text" href="https://t.me/PersistenceOneThai" rel="noopener noreferrer" target="_blank">Thai</a>
                           </div>
                           <div className="regional-box">
                               <a className="text" href="https://t.me/PersistenceKorea" rel="noopener noreferrer" target="_blank">Korean</a>
                           </div>
                   </div>
                    </div>
                </ReactModal.Body>
            </ReactModal>
        </div>
    );
};

export default Modal;
