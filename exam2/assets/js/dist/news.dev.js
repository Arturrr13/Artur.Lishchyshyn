"use strict";

fetch('assets/JSON/news.json').then(function (res) {
  return res.json();
}).then(function (res) {
  return news(res);
});

function news(news) {
  var html = '';
  news.forEach(function (el) {
    html += "\n        <div class=\"swiper-slide\" style=\"background: none; width:370px; max-height: 514px; height:100%\">\n        <div style=\"width:370px; max-height: 514px; height:100vh; background:white\" class=\"news__block\">\n            <img src=\"".concat(el.img, "\" style=\"width:100%; max-height:240px\"/>\n            <p>\n                ").concat(el.title, "\n            </p>\n            <p>\n                ").concat(el.text, "\n            </p>\n            <div class=\"autor\">\n                <img src=\"").concat(el.avatar, "\"/>\n                <div>\n                <span>").concat(el.name, "</span>\n                <p>").concat(el.date, "</p>\n                </div>\n            </div>\n        </div>\n        </div>\n        ");
  });
  document.getElementById('a').innerHTML = html;
}