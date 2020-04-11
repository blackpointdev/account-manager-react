import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import './LoginFormModal.css';

class LoginFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ""
        }
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="•••••••" />
                        </Form.Group>
                        <Button variant="light" className="login-button" type="submit">
                            LOGIN
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginFormModal;
