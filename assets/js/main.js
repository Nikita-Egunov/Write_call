import Swiper from "swiper";

import { Pagination, Navigation } from "swiper/modules";

var firstSwiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
      },
  });

function performSearch() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim() !== "") {
        // Здесь можно добавить логику для выполнения поиска
        alert(`Performing search for: ${searchQuery}`);
    } else {
        alert("Please enter a search query.");
    }
}