function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('username').innerHTML = data.name;
        })
        .catch((err) => {
            console.log(err);
        });
}

function findUsers(name) {
    const userId = document.getElementById('id').value;

    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('resultName').innerHTML = data.name;
            document.getElementById('resultEmail').innerHTML = data.email;
            document.getElementById('resultPhone').innerHTML = data.phone;
        })
        .catch((err) => {
            console.log(err);
            document.getElementById('result').innerHTML = err;
        });
}

function getDataFromMyServer() {
    fetch('/senduserdata')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.username);
        })
        .catch((err) => {
            console.log(err);
        });
}

function sendDataToServer() {
    fetch('getuserdata', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({ username: 'barel' }),
    })
    .then((res) => {
        console.log(res);
    });
}