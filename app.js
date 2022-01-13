window.onload = main;

function main() {

    function makeRedOrGreen() {
        if (!this.checkValidity()) {
            this.style.borderColor = "red";
        }
        else {
            this.style.borderColor = "green";
        }
    }

    function checkMatching() {
        if (this.value == password.value) {
            this.setCustomValidity('');
            this.style.borderColor = "green";
        }
        else {
            this.setCustomValidity('Passwords do not match');
            this.style.borderColor = "red";
        }
    }

    function checkSubject() {
        if ((this.value == 'Computer Science') || (this.value == 'Economics') || (this.value == 'Marketing')) {
            this.setCustomValidity('');
            this.style.borderColor = "green";
        }
        else {
            this.setCustomValidity('Subject not available. Please choose another subject');
            this.style.borderColor = "red";
        }
    }

    function checkLanguage() {
        if ((this.value == 'English') || (this.value == 'French') || (this.value == 'German') || (this.value == 'Spanish')) {
            this.setCustomValidity('');
            this.style.borderColor = "green";
        }
        else {
            this.setCustomValidity('Language not supported. Please choose another language');
            this.style.borderColor = "red";
        }
    }

    function checkAge() {
        var year = date.value.substring(0,4);
        var intYear = parseInt(year);
        let currentYear =  new Date().getFullYear();
        if (currentYear - year >= 18) {
            this.setCustomValidity('');
            this.style.borderColor = "green";
        }
        else {
            this.setCustomValidity('User must be at least 18 years old to enroll');
            this.style.borderColor = "red";
        }
    }

    var inputFields = document.querySelectorAll("#sign-up-form fieldset input, #sign-up-form fieldset textarea");

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener("change", makeRedOrGreen);
    }

    var password = document.getElementById("input-password");
    var verifyPassword = document.getElementById("input-password-2");

    verifyPassword.addEventListener("change", checkMatching);

    var subject = document.getElementById("subject-input");

    subject.addEventListener("change", checkSubject);

    var language = document.getElementById("language-input");

    language.addEventListener("change", checkLanguage);

    var date = document.getElementById("input-date");
    date.addEventListener("change", checkAge);

}
