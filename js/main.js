window.addEventListener("orientationchange", function () {
 if (window.orientation == "90" || window.orientation == "-90") {
  document.body.classList.add('landscape');
 } else {
  document.body.classList.remove('landscape');

 }
}, false);

let burgerIcon = document.getElementById('bur');
let menu = document.querySelector('#menu');
let menuItems = document.querySelectorAll('.menu__item');

for (const menuItem of menuItems) {
 menuItem.addEventListener('click', () => {
  burgerIcon.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('locked');
 });
}

if (burgerIcon) {
 burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('locked');
 });
} else {
 burgerIcon.classList.remove('active');
 menu.classList.remove('active');
 document.body.classList.remove('locked');

}
