import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './AddOperationModal.css';

class AddOperationModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    Add operation
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                                <Form.Control required as="select">
                                    <option>User 1</option>
                                    <option>User 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="text" required placeholder="Amount" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Title (optional)" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Button type="submit" className="submit-btn" variant="primary">
                                    Add
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    };
}

export default AddOperationModal;