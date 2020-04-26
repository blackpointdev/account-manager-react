function addOperation(operation, user) {
    if (user != null) {
        const header = { 
            'Authorization': `Bearer ${user.jwt}`, 
            'Content-Type': 'application/json'
        };
        const requestOptions = {method: 'POST', headers: header, body: JSON.stringify(operation)};
        return fetch(`http://localhost:8080/api/users/${operation.username}/operations`, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                alert("Could not register operation. Please try again later.");
            }
        });
    }
}

export const operationsService = {
    addOperation
};