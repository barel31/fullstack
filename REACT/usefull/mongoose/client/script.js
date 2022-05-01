const signupForm = () => {
    const passwordLength = document.forms['signupform']['password'].value.length;
    const firstnameLength = document.forms['signupform']['firstname'].value.length;
    const lastnameLength = document.forms['signupform']['lastname'].value.length;

    if (passwordLength < 2 || passwordLength > 10
        || !(firstnameLength >= 2 && firstnameLength <= 20)
        || !(lastnameLength >= 2 && lastnameLength <= 20)) {
        alert('You have to complete the required fields');
        return false;
    }
    
    return true;
}
