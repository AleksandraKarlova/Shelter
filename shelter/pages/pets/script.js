const burgerMenuOpen = document.querySelector('.burger-menu-pets');
const burgerMenuClose = document.querySelector('.burger-menu-close');
const burgerMenu = document.querySelector('.nav');
const body = document.querySelector('body');

burgerMenuOpen.addEventListener('click', () => {
  burgerMenu.classList.add('nav_active');
  body.classList.add('body-menu-active');
});

burgerMenuClose.addEventListener('click', () => {
  burgerMenu.classList.remove('nav_active');
  body.classList.remove('body-menu-active');
});