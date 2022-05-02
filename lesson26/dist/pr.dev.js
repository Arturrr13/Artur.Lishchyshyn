"use strict";

function uName() {
  var name = prompt('Ваше ім`я');
  alert('Привіт, ' + name);
}

function uAge() {
  var year = 2022;
  var userage = parseInt(prompt('Рік вашого народження'));
  var rez = year - userage;
  alert('Ваш вік: ' + rez);
}

function square() {
  var side = parseInt(prompt('Введіть сторону квадрату'));
  var p = side * 4;
  alert('Периметр: ' + p);
}

function circle() {
  var r = parseInt(prompt('Введіть радіус'));
  var s = 3.14 * Math.pow(r, 2);
  alert('Площа: ' + s);
}

function sped() {
  var s = parseInt(prompt('Введіть відстань'));
  var t = parseInt(prompt('Введіть час'));
  var v = s / t;
  alert("\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ".concat(v, " \u043A\u043C/\u0433\u043E\u0434"));
}

function USDinEUR() {
  var usd = parseInt(prompt('Введіть $$$-'));
  eurtousdt = 0.95;
  var eur = usd * eurtousdt;
  alert("EUR: ".concat(eur));
}

function lastINfirst() {
  var num = parseInt(prompt('Введіть пятизначне число'));
  var last = num % 10;
  var lastdel = num / 10 + last * 10000;
  alert(Math.floor("".concat(lastdel)));
}

function salary() {
  var allmoney = parseInt(prompt('Введіть загальну суму продажів'));
  var salary = allmoney * 0.1 + 250;
  alert("\u0417\u041F=== ".concat(salary));
}