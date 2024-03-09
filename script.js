const userEmail = document.querySelector('#email');
const userCountry = document.querySelector('#country');
const userZip = document.querySelector('#zip-code');
const userPassword = document.querySelector('#password');
const userConfirmPassword = document.querySelector('#confirm-password');
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
}

function checkCountryError() {
    if (userCountry.value == "Select") {
        userCountry.setCustomValidity("Please enter a country");
    }
}

userEmail.addEventListener('input', checkEmailError);