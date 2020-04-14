export const authenticationService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch("http://localhost:8080/api/authenticate", requestOptions)
            .then((response) => {
                if(response.ok) {
                    return response.json()
                }
                else if([401, 403].indexOf(response.status)) {
                    alert("Incorrect login or password.");
                    window.location.reload(true);
                }
            })
            .then(user => {
                window.localStorage.setItem("userJwt", user.jwt);
                window.localStorage.setItem("userUsername", username);
                return user;
            })
}

function logout() {
    window.localStorage.clear();
}