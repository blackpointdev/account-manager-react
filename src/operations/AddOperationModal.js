import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { operationsService } from '../services/operations.service';

import './AddOperationModal.css';

class AddOperationModal extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let operation = {
            user: this.state.user,
            amount: this.state.amount,
            title: this.state.title
        };

        operationsService.addOperation(operation);
    }

    handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({[name]: value});
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
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.SelectCustom">
                                <Form.Control required as="select" name="user" onChange={this.handleInputChange}>
                                    <option>User 1</option>
                                    <option>User 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control name="amount" onChange={this.handleInputChange} type="text" required placeholder="Amount" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control name="title" onChange={this.handleInputChange} type="text" placeholder="Title (optional)" />
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