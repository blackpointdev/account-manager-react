async function retriveOperations(user) {
    if (user != null) {
        const header = { Authorization: `Bearer ${user.jwt}` };
        const requestOptions = {method: 'GET', headers: header};

        let operations = await fetch("http://localhost:8080/api/operations", requestOptions)
        .then((response) => {
            return response.json();
        })

        return operations;
    }
}

async function addOperation(operation, user) {
    if (user != null) {
        const header = { 
            'Authorization': `Bearer ${user.jwt}`, 
            'Content-Type': 'application/json'
        };
        const requestOptions = {method: 'POST', headers: header, body: JSON.stringify(operation)};
        const response = await fetch(`http://localhost:8080/api/users/${operation.username}/operations`, requestOptions);
        if (response.ok) {
            return response.json();
        }
        else {
            alert("Could not register operation. Please try again later.");
        }
    }
}

async function deleteOperation(id, user) {
    if (user != null) {
        const header = { 
            'Authorization': `Bearer ${user.jwt}`, 
            'Content-Type': 'application/json'
        };
        const requestOptions = {method: 'DELETE', headers: header};
        const response = await fetch(`http://localhost:8080/api/operations/${id}`, requestOptions);
        if (!response.ok) {
            alert("Could not delete operation. Please try again later.");
        }
    }
}

export const operationsService = {
    retriveOperations,
    addOperation,
    deleteOperation
};