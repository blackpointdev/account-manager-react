import React, {Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './LoginAlert.css'

class LoginAlert extends Component{
    render() {
        return (
            <Modal
                show = {this.props.show}
                onHide={this.props.onHide}
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
                    <Button variant="light" className="button" onClick={this.props.action}>LOGIN</Button>
                    <Button variant="outline-info" className="button register-button">CREATE ACCOUNT</Button>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginAlert;