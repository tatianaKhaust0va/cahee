let burgerIcon = document.getElementById('bur');
let menu = document.querySelector('#menu');
let locked = document.getElementsByTagName('body');
let menuItems = document.querySelectorAll('.menu__item');

for (const menuItem of menuItems) {
 menuItem.addEventListener('click', () => {
  burgerIcon.classList.remove('active');
  menu.classList.remove('active');
 })
}

if (burgerIcon) {
 burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
 });
} else {
 burgerIcon.classList.remove('active');
 menu.classList.remove('active');
}
