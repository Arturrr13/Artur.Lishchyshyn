"use strict";

var div = document.createElement('div');
var div2 = document.createElement('div');
var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni dolore, autem suscipit doloribus itaque ut omnis quam consequatur dolorum aliquam ipsam nemo natus? Laudantium molestias cupiditate cum numquam facere.';
div.style.border = '2px solid black';
div.style.width = '400px';
div2.style.border = '2px solid black';
div2.style.width = '400px';
div2.style.color = 'green';
div.innerText = text;
div2.innerText = text;
div2.style.display = 'none';
document.querySelector('.task1').append(div);
document.querySelector('.task1').append(div2);
div2.setAttribute('contenteditable', true);
document.body.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    div.style.display = 'none';
    div2.style.display = 'block';
  }
});
document.body.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyS') {
    e.preventDefault();
    div.innerText = div2.innerText;
    div2.style.display = 'none';
    div.style.display = 'block';
  }
});

function size(e) {
  div2.style.width = e.clientX + 'px';
  div2.style.height = e.clientY + 'px';
}

document.body.addEventListener('mousedown', function () {
  return document.body.addEventListener('mousemove', size);
});
document.addEventListener('mouseup', function () {
  return document.body.removeEventListener('mousemove', size);
});
var USER = [{
  name: 'Mark',
  age: 14,
  date: {
    d: 13,
    m: 5,
    y: 2008,
    date: function date() {
      var date = new Date(this.y, this.m, this.d);
      return date;
    }
  }
}, {
  name: 'Bob',
  age: 52,
  date: {
    d: 24,
    m: 3,
    y: 1970,
    date: function date() {
      var date = new Date(this.y, this.m, this.d);
      return date;
    }
  }
}, {
  name: 'Emilia',
  age: 14,
  date: {
    d: 14,
    m: 5,
    y: 2008,
    date: function date() {
      var date = new Date(this.y, this.m, this.d);
      return date;
    }
  }
}, {
  name: 'Johnny',
  age: 62,
  date: {
    d: 17,
    m: 9,
    y: 1959,
    date: function date() {
      var date = new Date(this.y, this.m, this.d);
      return date;
    }
  }
}];

function output() {
  var html = '';
  USER.forEach(function (el) {
    html += "\n            <tr>\n                <td>".concat(el.name, "</td>\n                <td>").concat(el.age, "</td>\n                <td>").concat(el.date.d + ':' + el.date.m + ':' + el.date.y, "</td>\n            </tr>\n        ");
  });
  document.getElementById('tbody').innerHTML = html;
}

var thname = document.getElementById('name');
var thage = document.getElementById('age');
var thdata = document.getElementById('date');

thname.onclick = function () {
  USER.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  output();
};

thage.onclick = function () {
  USER.sort(function (a, b) {
    return b.age - a.age;
  });
  output();
};

thdata.onclick = function () {
  USER.sort(function (a, b) {
    return b.date.date() - a.date.date();
  });
  output();
};