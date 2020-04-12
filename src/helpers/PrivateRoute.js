import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
class PrivateRoute extends Component {
    render() {
        const { component: Component, ...props } = this.props

        return (
            <Route
                {...props}
                render={props => (
                   window.localStorage.getItem("currentUser") ?
                        <Component {...props} /> :
                        <Redirect to='/login' />
                )}
            />
        )
    }
}

export default PrivateRoute;