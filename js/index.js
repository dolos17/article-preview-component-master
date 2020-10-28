const share = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

share.addEventListener('click', () =>{
    menu.classList.toggle("change");
});