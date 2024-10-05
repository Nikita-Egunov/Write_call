const burgerButton = document.querySelector('.burger-button');
    const menus = document.querySelectorAll('.menu');

    burgerButton.addEventListener('click', () => {
      burgerButton.classList.toggle('active');
      menus.forEach(menu => {
        menu.classList.toggle('active');
      });
    });

