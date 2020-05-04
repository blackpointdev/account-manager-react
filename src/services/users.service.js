async function getUsers(user) {
    if (user != null) {
        const header = { Authorization: `Bearer ${user.jwt}` };
        const requestOptions = {method: 'GET', headers: header};

        let operations = await fetch("http://localhost:8080/api/users", requestOptions)
        .then((response) => {
            return response.json();
        })

        return operations;
    }
}

export const usersService = {
    getUsers
}