let toggleBtn=document.querySelector('#nav-toggle');
let nav=document.querySelector('.navbar-nav');

toggleBtn.addEventListener('click',(e)=>{
    nav.classList.toggle('show');
    nav.classList.toggle('hide');
});
