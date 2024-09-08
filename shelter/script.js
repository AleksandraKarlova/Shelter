  const burgerMenuOpen = document.querySelector('.burger-menu');
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

  //не работает клик вне бургера и срабатывает ложный клик по нав листу сверху
  burgerMenu.addEventListener('click', (event) => {
    console.log(event.target);
    if (!event.target.classList.contains('nav')) {
      burgerMenu.classList.remove('nav_active');
      body.classList.remove('body-menu-active');
  }
}
)



