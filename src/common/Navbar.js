import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'

import LoginAlert from './LoginAlert';
import AddOperationModal from '../operations/AddOperationModal';
import { authenticationService } from '../services/authentication.service'; 

import './Navbar.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginAlert: false,
            showLoginForm: false
        }

        this.toggleLoginAlert = this.toggleLoginAlert.bind(this);
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleLoginAlert() {
        this.setState({
            showLoginAlert: !this.state.showLoginAlert
        })
    }

    toggleLoginForm() {
        this.setState({
            showLoginAlert: false,
            showLoginForm: !this.state.showLoginForm
        })
    }

    logout() {
        authenticationService.logout();
        this.props.changeLoginState(false);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
                <LinkContainer to="/operations">
                    <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/operations">
                            <Nav.Link>
                                Operations
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>
                                Users
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/api">
                            <Nav.Link>
                                API
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {this.props.loggedIn != null &&
                            <LinkContainer onClick={this.logout} to="/login">
                                <Nav.Link>
                                    Logout
                                </Nav.Link>
                            </LinkContainer>
                        }

                        <Button variant="outline-info" onClick={() => this.toggleLoginAlert()}>
                            <FontAwesomeIcon id="bill" icon={faMoneyBillAlt} />
                            ADD OPERATION
                        </Button>
                    </Nav>
                </Navbar.Collapse>
                {this.props.loggedIn ? (
                    <AddOperationModal show={this.state.showLoginAlert} onHide={this.toggleLoginAlert} action={this.toggleLoginForm} user={this.props.loggedIn} />
                ) : (
                    <LoginAlert show={this.state.showLoginAlert} onHide={this.toggleLoginAlert} action={this.toggleLoginForm} />
                )}
            </Navbar>

        );
    }
}

export default Navigation;