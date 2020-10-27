const memberForm = document.querySelector('#memberForm');
const inputs = document.querySelectorAll('input');


const email = document.querySelector('#email');
const gender = document.querySelector('#gender');
const dateOfBirth = document.querySelector('#dateOfBirth');
const check = document.querySelector('#check');
const btn = document.querySelector('#submit');



let validate = function (id) {
    let input = document.querySelector(id);
    const error = document.querySelector(id + '-error');
    if (input.value === '') {
        error.innerText = 'Please enter a valid input.';
        error.classList.add('text-danger')
        input.classList.add('border-danger');
    }
    else if (input.value.length < 2) {
        error.innerText = 'Please enter more than 2 characters';
        error.classList.add('text-danger')
        input.classList.add('border-danger');
    }
    else {
        error.innerText = '';
    }
}





btn.addEventListener('submit', function (e) {
    e.preventDefault();
})