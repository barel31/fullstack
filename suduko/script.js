let logged = false;

function signIn() {
    if (logged) {
        window.location.href = 'game.html';
        return;
    }
    let username = 'abcd';
    let password = '1234';
    let user = document.getElementById('floatingName').value;
    let pass = document.getElementById('floatingPassword').value;

    let ele = document.getElementById('pMessage');
    if (user !== username) {
        ele.setAttribute('style', 'color: red');
        ele.innerHTML = 'Username ' + user + ' has not exists.';
    } else if (pass !== password) {
        ele.setAttribute('style', 'color: red');
        ele.innerHTML = 'The password is incorrent.';
    } else {
        ele.style.color = 'green';
        ele.innerHTML = 'Successfully logged in. redirecting...';

        setTimeout(function () {
            window.location.href = 'game.html';
        }, 2000);

        logged = true;
    }
}
