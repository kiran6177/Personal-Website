const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateName() {
    if (name.value.trim() === '') {
        nameError.innerHTML = 'Name is required';
    } else {
        nameError.innerHTML = '';
    }
}

function validateEmail() {
    const emailPattern = /^([a-zA-Z0-9._-]+)@([a-zA-Z.-]+).([a-zA-Z]{2,4})$/;
    if (!emailPattern.test(email.value)) {
        emailError.innerHTML = 'Invalid email format';
    } else {
        emailError.innerHTML = '';
    }
}

function validateMessage() {
    if (message.value.trim() === '') {
        messageError.innerHTML = 'Message is required';
    } else {
        messageError.innerHTML = '';
    }
}

name.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
message.addEventListener('blur', validateMessage);

form.addEventListener('submit', function (event) {
    validateName();
    validateEmail();
    validateMessage();

    if (nameError.innerHTML || emailError.innerHTML || messageError.innerHTML) {
        event.preventDefault(); 
    }
    else{
        window.alert("Submitted Successfully")
    }
});
