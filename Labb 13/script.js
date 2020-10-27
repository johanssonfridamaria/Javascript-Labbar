const memberForm = document.querySelector('#memberForm');
const email = document.querySelector('#email');
const gender = document.querySelector('#gender');
const check = document.querySelector('#check');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const dateOfBirth = document.querySelector('#dateOfBirth');

const validate = function (id) {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');
    if (input.value === '') {
        error.textContent = 'Please enter a valid input.';
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
        return false
    }
    else if (input.value.length < 2) {
        error.textContent = 'Please enter more than 2 characters';
        error.classList.add('text-danger');
        input.classList.add('border-danger');
        input.focus();
        return false
    }
    else {
        error.textContent = '';
        input.classList.remove('border-danger');
        return true
    }
}

const validateEmail = function (email) {
    const emailError = document.querySelector('#email-error')
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) || email.value === '') {
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('text-danger');
        email.classList.add('border-danger');
        email.focus();
        return false
    }
    else {
        emailError.textContent = '';
        email.classList.remove('border-danger');
        return true
    }

}

const validateSelect = function (gender) {
    const genderError = document.querySelector('#gender-error');
    if (gender.value === 'Select') {
        genderError.textContent = 'Please select gender';
        genderError.classList.add('text-danger');
        gender.classList.add('border-danger');
        gender.focus();
        return false
    }
    else {
        genderError.textContent = '';
        gender.classList.remove('border-danger');
        return true
    }
}

const validateDateOfBirth = function (dateOfBirth) {
    const dateOfBirthError = document.querySelector('#dateOfBirth-error');
    let dateToday = new Date();
    let dateInput=new Date(dateOfBirth.value);
    
    if (dateOfBirth.value === ''|| dateInput > dateToday) {
        dateOfBirthError.textContent = 'Pls enter a valid input.';
        dateOfBirthError.classList.add('text-danger');
        dateOfBirth.classList.add('border-danger');
        dateOfBirth.focus();
        return false

    } else if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(dateOfBirth.value)){
        dateOfBirthError.textContent = 'Pls enter all fields.';
        dateOfBirthError.classList.add('text-danger');
        dateOfBirth.classList.add('border-danger');
        dateOfBirth.focus();
        return false
    }
    else {
        dateOfBirthError.textContent = '';
        dateOfBirth.classList.remove('border-danger');
        return true
    }
}

const validateTerms = function (check) {
    const termsError = document.querySelector('#check-error');
    if (!check.checked) {
        termsError.textContent = 'You must accept the terms of use.';
        termsError.classList.add('text-danger');
        return false
    }
    else {
        termsError.textContent = '';
        return true
    }
}

memberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validate('#firstName') && validate('#lastName') && validateEmail(email) && validateSelect(gender) && validateDateOfBirth(dateOfBirth) && validateTerms(check)) {
        console.log('Form success!');

        let member = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            gender: gender.value,
            dateOfBirth: dateOfBirth.value
        }

        console.log(member);
        memberForm.reset();
    }
    else {
        console.log('Form failed');
    }
})