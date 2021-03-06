import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { operationsService } from '../services/operations.service';
import { usersService } from '../services/users.service';

import './AddOperationModal.css';

class AddOperationModal extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            usersList: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getUsersList = this.getUsersList.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.getUsersList();
    }

    getUsersList() {
        const data = usersService.getUsers(this.props.user);

        data.then((users) => {
            if (this._isMounted) {
                this.setState({
                    usersList: users
                });
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username === "Select..." || this.state.username == null) {
            alert("Please select user.");
            return;
        }

        let operation = {
            username: this.state.username,
            balance: this.state.balance,
            name: this.state.title
        };

        const result = operationsService.addOperation(operation, this.props.user);
        result.then(() => { this.props.updateOperations(); });
        this.props.onHide();
    }

    handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({[name]: value});
    }

    render() {
        let users = ["Please wait..."];

        if (this.state.usersList != null) {
            users = this.state.usersList.map((user) => {
                return(
                    <option>{user.username}</option>
                );
            });

            if (users.length === 0) {
                users = "No users found."
            }
        }
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
                                <Form.Control required as="select" name="username" onChange={this.handleInputChange}>
                                    <option>Select...</option>
                                    {users}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control name="balance" onChange={this.handleInputChange} type="text" required placeholder="Amount" />
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