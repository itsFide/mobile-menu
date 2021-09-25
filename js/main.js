let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})