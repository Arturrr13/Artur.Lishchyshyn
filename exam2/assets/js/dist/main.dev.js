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
        slidesPerView: 1,
        spaceBetween: 10
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 10
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  $('.menuToggle').on('click', function () {
    $('.burger__nav').toggleClass('active');

    if ($('.burger__nav').hasClass('active')) {
      $('.nav__block').css({
        display: 'none'
      });
      $('.navigation').css({
        justifyContent: 'flex-end'
      }).removeClass('scroll');
      $('.disp__bl').css({
        height: '100%',
        width: '100%',
        background: 'rgba(92, 33, 253, 0.593)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        display: 'block'
      });
      $('.navigation').removeClass('scroll');
    } else {
      $('.nav__block').css({
        display: 'flex'
      });
      $('.navigation').css({
        justifyContent: 'space-between'
      }).addClass('scroll');
      $('.disp__bl').css({
        display: 'none'
      });
    }
  });
  $('.menu a, .disp__bl').on('click', function () {
    $('.disp__bl').css({
      display: 'none'
    });
    $('.burger__nav').toggleClass('active');
    $('.nav__block').css({
      display: 'flex'
    });
    $('.navigation').css({
      justifyContent: 'space-between'
    }).addClass('scroll');
  });
  $('.nav__block .anchor, .menu .anchor').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - $('.navigation').height()
    }, 500);
  });
  $(window).on('scroll', function () {
    $(window).scrollTop() > 0 ? $('.navigation').addClass('scroll') : $('.navigation').removeClass('scroll');
  });
  $('#map__open').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('#map').html('');
    openMap();
  });
  $(window).on('resize', function () {
    if ($(window).width() <= 773) {
      $('.get__in__touch--close, .form__wrapper').css({
        display: 'none'
      });
      $('.get__in__touch--open').css({
        display: 'block'
      });
      $('.get__in__touch').css({
        height: 175,
        width: '100%',
        bottom: 538
      });
    } else {
      $('.get__in__touch--open, .get__in__touch--close').css({
        display: 'none'
      });
      $('.get__in__touch').css({
        height: 450,
        width: 770,
        bottom: 399
      });
      $('.form__wrapper').css({
        display: 'flex',
        flexDirection: 'row-reverse'
      });
    }
  });
  $('.get__in__touch--open').on('click', function () {
    $(this).css({
      display: 'none'
    });
    $('.get__in__touch').css({
      height: 610,
      transition: '1.5s'
    });
    $('.get__in__touch--close').css({
      display: 'block'
    });
    $('.form__wrapper').css({
      display: 'flex',
      flexDirection: 'column',
      opacity: 0
    }).animate({
      opacity: 1
    }, 3500);
    $('.form').css({
      marginBottom: 10
    });
  });
  $('.get__in__touch--close').on('click', function () {
    $(this).css({
      display: 'none'
    });
    $('.get__in__touch').css({
      height: 175,
      transition: '1.5s'
    });
    $('.get__in__touch--open').css({
      display: 'block'
    });
    $('.form__wrapper').css({
      display: 'none'
    });
  });
  $('#email').on('blur', function () {
    var email = $(this).val();
    email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1 ? $('.email__error').css({
      display: 'block'
    }).html('Incorrec email!') : $('.email__error').css({
      display: 'none'
    });
  });
  $('#name').on('blur', function () {
    var name = $(this).val();
    name.length < 1 || name.match(/[0-9]/) !== null ? $('.name__error').css({
      display: 'block'
    }).html('Incorrec name!') : $('.name__error').css({
      display: 'none'
    });
  });
});

function openMap() {
  var myIcon = L.icon({
    iconUrl: 'assets/leaflet/images/Pin.png',
    iconSize: [106, 106],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  var map = L.map('map').setView([40.7040524, -73.9242069], 11);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([40.7040524, -73.9242069], {
    icon: myIcon
  }).addTo(map).bindPopup('Hello!!!').openPopup();
}