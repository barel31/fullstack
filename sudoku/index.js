let logged = false;

function signIn() {
    if (logged) {
        window.location.href = 'game.html';
        return;
    }
    const username = 'abcd';
    const password = '1234';
    const user = $('#floatingName').val();
    const pass = $('#floatingPassword').val();

    const ele = $('#pMessage');
    if (user !== username) {
        ele.css('color' , 'red');
        ele.html('Username ' + user + ' has not exists.');
    } else if (pass !== password) {
        ele.css('color', 'red');
        ele.html('The password is incorrent.');
    } else {
        $('#loader').html(
            '<div class="loadingio-spinner-cube-2zx4f3ctido"><div class="ldio-1pkt0oqav2x"><div></div><div></div><div></div><div></div></div></div>'
        );

        setTimeout(function () {
            window.location.href = 'game.html';
        }, 2000);

        logged = true;
    }
}
