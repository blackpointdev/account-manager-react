import React, { Component } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paginatedOperations: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/operations").then((response) => {
            this.setState({
                paginatedOperations: response.data
            })
        });

        // fetch("http://localhost:8080/api/operations")
        //     .then(response => response.json())
        //     .then(response => {
        //         this.state.paginatedOperations = response;
        //     })
    };

    render() {
        let operations = this.state.paginatedOperations.map((paginableContent) => {
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
        return (
            <div className="App container">
                <Table>
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

export default App;
