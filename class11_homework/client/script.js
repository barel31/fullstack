document.getElementById('signupPost').addEventListener('submit', (event) => {
    const email = document.getElementsByName('email')[0].value;
    // const firstname = document.getElementsByName('firstname')[0].value;
    // const lastname = document.getElementsByName('lastname')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const passwordConfirm = document.getElementsByName('passwordConfirm')[0].value;

    // const containsSpecialChars = (str) => {
    //     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //     return specialChars.test(str);
    // };

    if (
        // (email.indexOf('gmail') === -1 && email.indexOf('yahoo') === -1) ||
        // (firstname !== null && (firstname.length < 2 || firstname.length > 20)) ||
        // (lastname !== null && (lastname.length < 2 || lastname.length > 20)) ||
        // (!containsSpecialChars(password) && (password.length < 2 || password.length > 20))
        password === '' || email === '' || passwordConfirm === ''
    ) {
        alert('You have to complete the required fields');
        event.preventDefault();
    }
});
