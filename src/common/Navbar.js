import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'

import LoginAlert from './LoginAlert';
import LoginForm from '../login/LoginForm';

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

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" id="navbar" variant="dark">
                <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
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
                        <Button variant="outline-info" onClick={() => this.toggleLoginAlert()}>
                            <FontAwesomeIcon id="bill" icon={faMoneyBillAlt} />
                            ADD OPERATION
                        </Button>
                    </Nav>
                </Navbar.Collapse>
                <LoginAlert show={this.state.showLoginAlert} onHide={this.toggleLoginAlert} action={this.toggleLoginForm} />
                <LoginForm show={this.state.showLoginForm} onHide={this.toggleLoginForm} />
            </Navbar>

        );
    }
}

export default Navigation;