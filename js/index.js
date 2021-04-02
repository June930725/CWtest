// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 5,
    }
  }
})

