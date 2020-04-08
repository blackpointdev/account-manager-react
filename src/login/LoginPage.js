import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './LoginPage.css';

class LoginPage extends Component {
    render() {
        return (
            <Row className="justify-content-md-center login-form">
                <Col sm={8}>
                    <h2 className="login-page-header">LOGIN</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="•••••••" />
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