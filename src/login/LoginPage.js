import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authenticationService } from '../services/authentication.service';

import './LoginPage.css';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            jwt: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        authenticationService.login(this.state.username, this.state.password)
            .then(user => {
                if(user.jwt) {
                    this.setState({
                        loggedIn: true,
                        jwt: user.jwt
                    });
                }
            });
    }

    handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({[name]: value});
    }

    render() {
        if(localStorage.getItem("currentUser")) {
            return <Redirect to ="/operations" />;
        }
        return (
            <Row className="justify-content-md-center login-form">
                <Col sm={8}>
                    <h2 className="login-page-header">LOGIN</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control placeholder="username" name="username" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="•••••••" name="password" onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Button variant="outline-info" className="login-button" type="submit">
                            LOGIN
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default LoginPage;