const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userZip = document.querySelector('#zip-code');
const userPassword = document.querySelector('#password');
const userConfirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector(".form-submit");
const zipRegExp = /\d{5}/g

function showError() {
    checkEmailError();
    checkCountryError();
    checkZipError();
    checkPasswordError();
    checkConfirmPasswordError();

    const emailError = document.querySelector('.email-error');
    emailError.textContent = userEmail.validationMessage;

    const countryError = document.querySelector('.country-error');
    countryError.textContent = userCountry.validationMessage;

    const zipError = document.querySelector('.zip-code-error');
    zipError.textContent = userZip.validationMessage;

    const passwordError = document.querySelector('.password-error');
    passwordError.textContent = userPassword.validationMessage;

    const confirmPasswordError = document.querySelector('.confirm-password-error');
    confirmPasswordError.textContent = userConfirmPassword.validationMessage;
    
}

function checkEmailError() {
    if (userEmail.validity.typeMismatch) {
        userEmail.setCustomValidity("Please enter a valid email address")
        return 1;
    } else {
        userEmail.setCustomValidity("");
        return 0;
    }
    // userEmail.reportValidity();
}

function checkCountryError() {
    if (userCountry.value == "placeholder") {
        userCountry.setCustomValidity("Please select a country");
        return 1;
    } else {
        userCountry.setCustomValidity("");
        return 0;
    }
    // userCountry.reportValidity();
}

function checkZipError() {
    if (!(zipRegExp.test(userZip.value))) {
        userZip.setCustomValidity("Please enter a valid ZIP code");
        return 1;
    } else {
        userZip.setCustomValidity("")
        return 0;
    }
    // userZip.reportValidity();
}

function checkPasswordError() {
    if (userPassword.value != userConfirmPassword.value) {
        userPassword.setCustomValidity("Passwords must match");
        userConfirmPassword.setCustomValidity("Passwords must match");
        return 1;
    } else {
        userPassword.setCustomValidity("");
        userConfirmPassword.setCustomValidity("");
        return 0;
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
userPassword.addEventListener('input', checkPasswordError);
userConfirmPassword.addEventListener('input', checkConfirmPasswordError);
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showError();
})