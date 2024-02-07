var swiper = new Swiper(".s1", {
  spaceBetween: 30,
  pagination: {
    el: ".pagination_block .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".s2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".all_publication .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".s3", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
