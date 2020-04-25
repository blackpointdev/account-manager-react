import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

import './OperationsList.css'

class OperationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginableOperations: [],
            areOperationsLoaded: false
        }
    }

    componentDidMount() {
        if (this.props.loggedInUser != null) {
        const header = { Authorization: `Bearer ${this.props.loggedInUser.jwt}` };
        const requestOptions = {method: 'GET', headers: header};
        fetch("http://localhost:8080/api/operations", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    paginableOperations: data,
                    areOperationsLoaded: true
                })
            })
        }
    };

    render() {
        let operations = ["Please wait..."];
        if (this.state.areOperationsLoaded) {
            operations = this.state.paginableOperations.content.map((operation) => {
                return (
                    <tr key={operation.id}>
                        <td>{operation.id}</td>
                        <td>{operation.name}</td>
                        <td>{operation.username}</td>
                        <td>{operation.balance}</td>
                        <td>
                            <Button variant="outline-success" size="sm" className="mr-2">Edit</Button>
                            <Button variant="outline-danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                )
            });
            if(operations.length === 0) {
                return (
                    <div className="operations-list">
                        <Alert variant="danger" className="operations-alert">No operations found...</Alert>
                    </div>
                );
            }
        }
        return (
            <div className="operations-list">
                <Table hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>User</th>
                            <th>Balance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default OperationsList;
