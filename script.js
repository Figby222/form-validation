const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userZip = document.querySelector('#zip-code');
const userPassword = document.querySelector('#password');
const userConfirmPassword = document.querySelector('#confirm-password');
const zipRegExp = /\d{5}/g

function showError() {
    if (!(userEmail.checkValidity())) {
        userEmail.setCustomValidity("Please enter a valid email address")
    }
}

function checkEmailError() {
    if (userEmail.validity.typeMismatch) {
        userEmail.setCustomValidity("Please enter a valid email address")
    } else {
        userEmail.setCustomValidity("");
    }
    userEmail.reportValidity();
}

function checkCountryError() {
    if (userCountry.value == "placeholder") {
        userCountry.setCustomValidity("Please select a country");
    } else {
        userCountry.setCustomValidity("");
    }
    userCountry.reportValidity();
}

function checkZipError() {
    if (!(zipRegExp.test(userZip.value))) {
        userZip.setCustomValidity("Please enter a valid ZIP code");
    } else {
        userZip.setCustomValidity("")
    }
    // userZip.reportValidity();
}

function checkPasswordError() {
    if (userPassword.value != userConfirmPassword.value) {
        userPassword.setCustomValidity("Passwords must match");
        userConfirmPassword.setCustomValidity("Passwords must match");
    } else {
        userPassword.setCustomValidity("");
        userConfirmPassword.setCustomValidity("");
    }

    // userPassword.reportValidity();
    // userConfirmPassword.reportValidity();
    // userConfirmPassword.reportValidity();
}

function checkConfirmPasswordError() {
    if (userPassword.value != userConfirmPassword.value) {
        userConfirmPassword.setCustomValidity("Passwords must match");
        userPassword.setCustomValidity("Passwords must match");
    } else {
        userConfirmPassword.setCustomValidity("");
        userPassword.setCustomValidity("");
    }

    // userConfirmPassword.reportValidity();
    // userConfirmPassword.reportValidity();
    // userConfirmPassword.reportValidity();
}

userEmail.addEventListener('input', checkEmailError);
userZip.addEventListener('input', checkZipError);