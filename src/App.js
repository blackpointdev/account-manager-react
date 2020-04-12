import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navigation from './common/Navbar';
import OperationsList from './feed/OperationsList';
import LoginPage from './login/LoginPage';
import PrivateRoute from './helpers/PrivateRoute';

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            currentUser: {
                jwt: '',
                username: ''
            }
        }

        this.setLoggedInUser = this.setLoggedInUser.bind(this);

    }

    setLoggedInUser(loggedIn, loggedUser = null) {
        this.setState({
            isUserLoggedIn: loggedIn,
            currentUser: loggedUser
        });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <Container>
                        <Switch>
                            <PrivateRoute path="/operations" component={() => <OperationsList loggedInUser={this.state.currentUser} />} />
                            <Route path="/login" component={() => <LoginPage changeLoginState={this.setLoggedInUser} />}  />
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;
