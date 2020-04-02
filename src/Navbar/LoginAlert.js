import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './LoginAlert.css'

function LoginAlert(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    You have to be logged in to add new a operation.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="light" className=" button login-button">LOGIN</Button>
                <Button variant="outline-info" className="button register-button">CREATE ACCOUNT</Button>
            </Modal.Body>
        </Modal>
    );
}

export default LoginAlert;