
import { setupModal } from './modal.js'


var firstSwiper = new Swiper(".firstSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var secondSwiper = new Swiper(".secondSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var thirdSwiper = new Swiper(".thirdSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1700: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    }
});


setupModal('my-modal', 'open-modal-btn', 'close-my-modal-btn');

setupModal('second-modal', 'open-second-modal-btn', 'close-second-modal-btn');

function catalogToggle(id) {
    document.getElementById(id).addEventListener('click', () => {
        document.getElementById('catalog-modal').classList.toggle('catalog-open')
        document.getElementById('links-open-btn-1').classList.add('active')
        document.getElementById('catalog__list-1').classList.add('catalog-open')
    })
};

function openLinks(buttonId, listId) {
    const button = document.getElementById(buttonId);
    const list = document.getElementById(listId);

    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');

        // Удаляем класс 'active' у всех кнопок
        document.querySelectorAll('.catalog__item').forEach(btn => {
            btn.classList.remove('active');
        });

        // Удаляем класс 'catalog-open' у всех списков
        document.querySelectorAll('.catalog__list').forEach(item => {
            item.classList.remove('catalog-open');
        });

        // Если кнопка не активна, добавляем классы
        if (!isActive) {
            button.classList.add('active');
            list.classList.add('catalog-open');
        }
    });
}

// Вызов функции для каждой пары кнопка-список
const buttonListPairs = [
    ['links-open-btn-1', 'catalog__list-1'],
    ['links-open-btn-2', 'catalog__list-2'],
    ['links-open-btn-3', 'catalog__list-3'],
    ['links-open-btn-4', 'catalog__list-4'],
    ['links-open-btn-5', 'catalog__list-5'],
    ['links-open-btn-6', 'catalog__list-6'],
    ['links-open-btn-7', 'catalog__list-7'],
    ['links-open-btn-8', 'catalog__list-8'],
    ['links-open-btn-9', 'catalog__list-9'],
    ['links-open-btn-10', 'catalog__list-10']
];

buttonListPairs.forEach(([buttonId, listId]) => {
    openLinks(buttonId, listId);
});

catalogToggle('open-catalog-modal-btn')
catalogToggle('close-catalog-btn')



console.log('js is here');