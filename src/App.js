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
            currentUser: null
        };

        this.setLoggedInUser = this.setLoggedInUser.bind(this);
        this.updateOperationsList = this.updateOperationsList.bind(this);
    }

    updateOperationsList() {
        this.operations.updateOperations(this.state.currentUser);
    }

    setLoggedInUser(loggedIn, loggedUser = null) {
        this.setState({
            isUserLoggedIn: loggedIn,
            currentUser: loggedUser
        });
    }

    componentDidMount() {
        if (window.localStorage.getItem("userJwt") != null) {
            this.setLoggedInUser(
                true, 
                { 
                    jwt: window.localStorage.getItem("userJwt"), 
                    username: window.localStorage.getItem("userUsername") 
                });
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation loggedIn={this.state.currentUser} changeLoginState={this.setLoggedInUser} updateOperations={this.updateOperationsList}/>
                    <Container>
                        <Switch>
                            <PrivateRoute path="/operations" component={() => <OperationsList ref={operations => this.operations = operations} loggedInUser={this.state.currentUser} />} />
                            <Route path="/login" component={() => <LoginPage changeLoginState={this.setLoggedInUser} />}  />
                        </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;
