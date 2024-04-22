const togglebtn = document.querySelector('.navbar-togglebtn');
const menu = document.querySelector ('.navbar-menu');
// JavaScript Document
togglebtn.addEventListener('click',() => {
	menu.classList.toggle('active');
});