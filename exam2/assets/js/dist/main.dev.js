"use strict";

$(function () {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next"
    }
  });
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 10
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 20
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
});