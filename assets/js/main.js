import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import { Navigation, Pagination } from '../../node_modules/swiper/modules/index.min.mjs';
import { setupModal } from './modal.js';

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
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },    
    breakpoints: {
        1700: {
            slidesPerView: 5,
            pagination: {
                el: '.swiper-pagination',
                clickable: false
            }
        },
    }
});

var fourthSwiper = new Swiper(".fourtSwiper", {
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
    const windowWidth = document.documentElement.clientWidth;
    
    document.getElementById(id).addEventListener('click', () => {
        document.getElementById('catalog-modal').classList.toggle('catalog-open')
        if (windowWidth > 1450) {
            document.querySelectorAll('.catalog__item, .catalog__list').forEach(el => {
                el.classList.remove('active', 'catalog-open');
            });
        document.getElementById('links-open-btn-1').classList.add('active')
        document.getElementById('catalog__list-1--full').classList.add('catalog-open')
        } else {
            document.querySelectorAll('.catalog__item, .catalog__list').forEach(el => {
                el.classList.remove('active', 'catalog-open');
            });
            document.getElementById('links-open-btn-1').classList.add('active')
            document.getElementById('catalog__list-1').classList.add('catalog-open')
        }
    })
};

function openLinks(buttonId, listId, listIdFull) {
    const button = document.getElementById(buttonId);
    const listFull = document.getElementById(listIdFull);
    const list = document.getElementById(listId)

    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');

        document.querySelectorAll('.catalog__item, .catalog__list').forEach(el => {
            el.classList.remove('active', 'catalog-open');
        });
        const windowWidth = document.documentElement.clientWidth;
        if (windowWidth > 1450) {
            if (!isActive) {
                button.classList.add('active');
                listFull.classList.add('catalog-open');
            } else {
                button.classList.add('active');
                listFull.classList.add('catalog-open');
            } 
        } else {
            if (!isActive) {
                button.classList.add('active');
                list.classList.add('catalog-open');
            } else {
                button.classList.add('active');
                list.classList.add('catalog-open');
            }
        }
    });
}

const buttonListPairs = [
    ['links-open-btn-1', 'catalog__list-1','catalog__list-1--full'],
    ['links-open-btn-2', 'catalog__list-2', 'catalog__list-2--full'],
    ['links-open-btn-3', 'catalog__list-3', 'catalog__list-3--full'],
    ['links-open-btn-4', 'catalog__list-4', 'catalog__list-4--full'],
    ['links-open-btn-5', 'catalog__list-5', 'catalog__list-5--full'],
    ['links-open-btn-6', 'catalog__list-6', 'catalog__list-6--full'],
    ['links-open-btn-7', 'catalog__list-7', 'catalog__list-7--full'],
    ['links-open-btn-8', 'catalog__list-8', 'catalog__list-8--full'],
    ['links-open-btn-9', 'catalog__list-9', 'catalog__list-9--full'],
    ['links-open-btn-10', 'catalog__list-10', 'catalog__list-10--full']
];

buttonListPairs.forEach(([buttonId, listId, listIdFull]) => {
    openLinks(buttonId, listId, listIdFull);
});

catalogToggle('open-catalog-modal-btn')
catalogToggle('close-catalog-btn')

const burgerButton = document.getElementById('burger-button');
const charm = document.getElementById('charm');
const menus = document.querySelectorAll('.menu');

burgerButton.addEventListener('click', () => {
    document.querySelector('.conteiner__header').classList.toggle('unPadding')
    menus.forEach(menu => {
        menu.classList.toggle('visible');
    });
});

charm.addEventListener('click', () => {
    menus.forEach(menu => {
        menu.classList.toggle('visible');
    });
});

console.log('js is here');