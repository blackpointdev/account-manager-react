import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navigation from './common/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginableOperations: [],
            areOperationsLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/operations")
            .then((response) => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    paginableOperations: data,
                    areOperationsLoaded: true
                })
            })
    };

    render() {
        let operations = ["Please wait..."];
        if (this.state.areOperationsLoaded) {
            operations = this.state.paginableOperations.content.map((operation) => {
                return (
                    <tr key={operation.id}>
                        <td>{operation.id}</td>
                        <td>{operation.name}</td>
                        <td>TODO</td>
                        <td>{operation.balance}</td>
                        <td>
                            <Button variant="outline-success" size="sm" className="mr-2">Edit</Button>
                            <Button variant="outline-danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                )
            });
            if(operations.length === 0) {
                operations = "No available operations...";
            }
        }
        return (
            <div className="App">
                <Navigation />
                <div className="container">
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
            </div>
        );
    }
}

export default App;
