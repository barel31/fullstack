document.getElementById('signupPost').addEventListener('submit', (event) => {
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const passwordConfirm = document.getElementsByName('passwordConfirm')[0].value;

    if (password === '' || email === '' || passwordConfirm === '') {
        alert('You have to complete the required fields');
        event.preventDefault();
    }
});
