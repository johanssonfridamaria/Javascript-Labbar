let toggleButton = document.querySelector('#nav-toggle');
let nav = document.querySelector('.navbar-nav');

toggleButton.addEventListener('click', (e)=>{
    nav.classList.toggle('d-block');
    nav.classList.toggle('d-none');
})