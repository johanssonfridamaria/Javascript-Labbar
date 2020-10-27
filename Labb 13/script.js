const memberForm = document.querySelector('#memberForm');
const email = document.querySelector('#email');
const gender = document.querySelector('#gender');
const check= document.querySelector('#check');

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
        input.classList.remove('border-danger');
    }
}

const validateEmail = function (email) {
    const emailError = document.querySelector('#email-error')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) || email.value === '') {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('text-danger');
        email.classList.add('border-danger');
        email.focus();
    }
    else{
        emailError.textContent ='';
        email.classList.remove('border-danger');
    }

}

const validateSelect = function(gender){
    const genderError = document.querySelector('#gender-error');
    if(gender.value === 'Select'){
        genderError.textContent = 'Please select gender';
        genderError.classList.add('text-danger');
        gender.classList.add('border-danger');
        gender.focus();
    }
    else{
        genderError.textContent = '';
        gender.classList.remove('border-danger');
    }
}

const validateTerms = function(check){
    const termsError= document.querySelector('#check-error');
    if(!check.value === checked){
        termsError.textContent ='You must accept the terms of use.'
        termsError.classList.add('text-danger')
    }
}


memberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validate('#firstName');
    validate('#lastName');
    validateEmail(email);
    validateSelect(gender);
    validateTerms(check);
})