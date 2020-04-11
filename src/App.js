import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navigation from './common/Navbar';
import OperationsList from './feed/OperationsList';
import LoginPage from './login/LoginPage';
import PrivateRoute from './helpers/PrivateRoute';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <Container>
                        <Switch>
                            <PrivateRoute path="/operations" component={OperationsList} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;
