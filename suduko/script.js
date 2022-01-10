let username = 'test';
let password = 'test';

function signIn() {
    let user = document.getElementById('floatingName').value;
    let pass = document.getElementById('floatingPassword').value;
    let success = false;

    let ele = document.getElementById('pMessage');
    if(user !== username) {
        // ele.style.color = 'red';
        ele.setAttribute('style', 'color: red')
        ele.innerHTML = 'Username ' + user + ' has not exists.'
    }
    else if(pass !== password) {
        ele.style.color = 'red';
        ele.innerHTML = 'The password is incorrent.'
    }
    else {
        ele.style.color = 'green';
        ele.innerHTML = 'Successfully logged in. redirecting...'
    }
}