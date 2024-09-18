
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
})

var thirdSwiper = new Swiper(".thirdSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  })
  

function performSearch() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim() !== "") {
        // Здесь можно добавить логику для выполнения поиска
        alert(`Performing search for: ${searchQuery}`);
    } else {
        alert("Please enter a search query.");
    }
}