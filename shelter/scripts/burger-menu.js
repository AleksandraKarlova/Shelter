  const burgerMenuOpen = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay')


  burgerMenuOpen.addEventListener('click', () => {
    burgerMenuOpen.classList.toggle('burger-menu_active');
    nav.classList.toggle('nav_active');
    body.classList.toggle('body-menu-active');
  });

  nav.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.classList.contains('nav') && !target.classList.contains('nav-list')) {
      burgerMenuOpen.classList.remove('burger-menu_active');
      nav.classList.remove('nav_active');
      body.classList.remove('body-menu-active');
    }
  });


  overlay.addEventListener('click', () => {
    burgerMenuOpen.classList.remove('burger-menu_active');
    nav.classList.remove('nav_active');
    body.classList.remove('body-menu-active');
  });



