import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'

import LoginAlert from './LoginAlert';
import LoginForm from '../login/LoginForm';

import './Navbar.css';

class Navigation extends Component{
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

        return(
            <Navbar id="navbar" variant="dark">
                <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Operations</Nav.Link>
                <Nav.Link href="#features">Users</Nav.Link>
                <Nav.Link href="#pricing">API</Nav.Link>
                </Nav>
                <Button variant="outline-info" onClick={() => this.toggleLoginAlert()}>
                    <FontAwesomeIcon id="bill" icon={faMoneyBillAlt}/>
                    ADD OPERATION
                </Button>
                <LoginAlert show={this.state.showLoginAlert} onHide={this.toggleLoginAlert} action={this.toggleLoginForm} />
                <LoginForm show={this.state.showLoginForm} onHide={this.toggleLoginForm} />
            </Navbar>

        );
    }
}

export default Navigation;