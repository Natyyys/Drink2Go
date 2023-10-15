const swiperContainer = document.querySelector('.swiper-wrapper');

swiperContainer.classList.remove('swiper-wrapper--nojs');

const swiper = new Swiper ('.swiper', {
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
