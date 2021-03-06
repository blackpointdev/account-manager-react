import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { operationsService } from '../services/operations.service'

import './OperationsList.css'

class OperationsList extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            paginableOperations: [],
            areOperationsLoaded: false,
            balance: 0,
            usersBalance: [],
            numberOfOperations: 0
        }

        this.deleteOperation = this.deleteOperation.bind(this);
        this.updateOperations = this.updateOperations.bind(this);
        this.getBalance = this.getBalance.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        
        this.updateOperations(this.props.loggedInUser);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    
    updateOperations(user) {
        this.setState({
            areOperationsLoaded: false
        });
        
        const data = operationsService.retriveOperations(user);

        data.then((operations) => {
            if(this._isMounted) {
                this.setState({
                    paginableOperations: operations,
                    areOperationsLoaded: true
                });
            }
        });  

        this.getBalance(this.props.loggedInUser);
        this.getBalance(this.props.loggedInUser, "blackpoint");
        this.getBalance(this.props.loggedInUser, "rodzice");
    }

    getBalance(user, username = null) {
        const data = operationsService.getBalance(user, username) 

        if (username === null) {
            data.then((balanceInput) => {
                if(this._isMounted) {
                    this.setState({
                        balance: balanceInput.balance,
                        numberOfOperations: balanceInput.numberOfOperations
                    })
                }
            });
        }
        else {
            data.then((balanceInput) => {
                if(this._isMounted) {
                    this.setState(state => {
                        const usersBalance = state.usersBalance.concat(balanceInput);
                        return {
                            usersBalance
                        };
                    });
                };
            });
        }
    }

    deleteOperation(operationId) {
        const response = operationsService.deleteOperation(operationId, this.props.loggedInUser);

        response.then(() => { 
            this.updateOperations(this.props.loggedInUser);
            this.getBalance(this.props.loggedInUser);
            this.getBalance(this.props.loggedInUser, "blackpoint");
            this.getBalance(this.props.loggedInUser, "rodzice");
        });
    }

    render() {
        let operations = ["Please wait..."];
        let usersBalance = ["Please wait..."];
        if (this.state.areOperationsLoaded) {
            operations = this.state.paginableOperations.content.map((operation) => {
                return (
                    <tr key={operation.id}>
                        <td>{operation.id}</td>
                        <td>{operation.name}</td>
                        <td>{operation.username}</td>
                        <td>{operation.balance.toFixed(2)} PLN</td>
                        <td>
                            <Button variant="outline-success" size="sm" className="mr-2">Edit</Button>
                            <Button variant="outline-danger" size="sm" onClick={() => { this.deleteOperation(operation.id); } }>Delete</Button>
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

            usersBalance = this.state.usersBalance.map((userBalance) => {
                return (
                    <div className="row">
                        <div className="col">
                            {userBalance.balance}
                        </div>
                        <div className="col">
                            {userBalance.numberOfOperations}
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="operations-list">
                <div className="total-data">
                    <div className="row">
                        <div className="col">
                            <span className="balance-label">Total operations:</span>
                            <span className="balance-value">{this.state.numberOfOperations}</span>
                        </div>
                        <div className="col">
                            <label className="balance-label">Total balance:</label>
                            <span className="balance-value">{this.state.balance.toFixed(2)} PLN</span>
                        </div>
                    </div>
                    {usersBalance}
                </div>
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
