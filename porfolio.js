/* sélectionner nos élement et les mettres dans des constantes  */
const burger = document.querySelector('.burger');
const nav   = document.querySelector('nav');
const lien   = document.querySelectorAll('.liens-navigations');
const retourHaut = document.querySelector(".retourHaut");

let hauteurAvantNav = nav .offsetTop;




burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    nav.classList.toggle('active');

})




let changeFond = () => {
    if(window.scrollY >= 200) {
        nav.classList.add('fond-scroll');
    } else {
        nav.classList.remove('font-scroll');
    }
    if(window.scrollY >= 500) {
        retourHaut.classList.add('active');
    } else {
        retourHaut.classList.remove('active');

    }






}

window.addEventListener('scroll', changeFond)