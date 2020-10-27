const memberForm = document.querySelector('#memberForm');
const email = document.querySelector('#email')

const validate = function (id) {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');
    if (input.value === '') {
        error.textContent = 'Please enter a valid input.';
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
    }
    else if (input.value.length < 2) {
        error.textContent = 'Please enter more than 2 characters';
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
    }
    else {
        error.textContent = '';
    }
}

const validateEmail = function (email) {
    const emailError = document.querySelector('#email-error')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('text-danger');
        email.classList.add('border-danger');
        email.focus();
    }
    else{
        emailError.textContent ='';
    }

}





memberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validate('#firstName');
    validate('#lastName');
})