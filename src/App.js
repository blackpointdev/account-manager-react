import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './common/Navbar';
import OperationsList from './feed/OperationsList';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navigation />
                    <div className="container">

                        <Switch>
                            <Route path="/operations">
                                <OperationsList />
                            </Route>
                        </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
