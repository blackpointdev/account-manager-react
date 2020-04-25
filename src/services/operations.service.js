function addOperation(operation, user) {
    if (user != null) {
        const header = { 
            'Authorization': `Bearer ${user.jwt}`, 
            'Content-Type': 'application/json'
        };
        const requestOptions = {method: 'POST', headers: header, body: JSON.stringify(operation)};
        const response = fetch(`http://localhost:8080/api/users/${user.username}/operations`, requestOptions);

        console.log(response)
        }
}

export const operationsService = {
    addOperation
};