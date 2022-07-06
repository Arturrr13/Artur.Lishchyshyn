"use strict";

var movieItem = {
  props: ['movie'],
  methods: {
    addInFavorite: function addInFavorite(id) {
      this.$emit('addInFavorite', id);
    },
    getInfo: function getInfo(id) {
      this.$emit('getInfo', id);
    }
  },
  template: '#movieItem'
};
var Pagination = {
  props: {
    page: {
      type: Number,
      "default": 1,
      required: true
    },
    total: {
      type: Number,
      "default": 0,
      required: true
    },
    newMax: {
      type: Number,
      "default": 1,
      required: true
    }
  },
  methods: {
    goToPage: function goToPage(num) {
      this.$emit('goToPage', num);
    },
    number: function number(p) {
      if (p <= 4) {
        return 0;
      }

      if (p < this.total - 1) {
        return p >= 5 ? p - 3 : 0;
      } else {
        return p - 5;
      }
    }
  },
  template: '#pagination'
};
var App = {
  data: function data() {
    return {
      API_KEY: 'e6735353',
      search: 'batman',
      movieYear: '',
      movieList: [],
      movieInfo: {},
      showModal: false,
      select: 'movie',
      myFavorites: [],
      ratings: ['', '', ''],
      totalPages: 0,
      page: 1,
      lastSearch: ''
    };
  },
  components: {
    movieItem: movieItem,
    Pagination: Pagination
  },
  created: function created() {
    this.myFavorites = JSON.parse(localStorage.getItem('favorites'));
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      this.lastSearch !== this.search ? this.page = 1 : console.log("LOL");

      if (this.search !== '') {
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&type=").concat(this.select, "&y=").concat(this.movieYear, "&page=").concat(this.page)).then(function (res) {
          _this.movieList = res.data.Search;
          _this.totalPages = Math.ceil(res.data.totalResults / 10);
          _this.lastSearch = _this.search;

          if (_this.totalPages < 5) {
            _this.newMax = _this.totalPages;
          } else {
            _this.newMax = 5;
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    showInfo: function showInfo() {
      this.showModal = true;
    },
    getInfo: function getInfo(id) {
      var _this2 = this;

      if (this.search !== '') {
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&i=").concat(id)).then(function (res) {
          _this2.movieInfo = res.data;

          _this2.showInfo();

          _this2.ratings[0] = parseFloat(_this2.movieInfo.Ratings[0].Value) * 10;
          _this2.ratings[1] = parseFloat(_this2.movieInfo.Ratings[1].Value);
          _this2.ratings[2] = parseFloat(_this2.movieInfo.Ratings[2].Value);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    addInFavorite: function addInFavorite(id) {
      var index = this.movieList.findIndex(function (e) {
        return e.imdbID === id;
      });
      var index2 = this.myFavorites.findIndex(function (e) {
        return e.imdbID === id;
      });

      if (index2 === -1) {
        var el = this.movieList[index];
        el.favorite = true;
        this.myFavorites.push(el);
      } else {
        this.myFavorites.splice(index2, 1);
      }

      localStorage.setItem('favorites', JSON.stringify(this.myFavorites));
    },
    movieListWithFavorite: function movieListWithFavorite() {
      var _this3 = this;

      var array = [];
      this.movieList.forEach(function (e) {
        var findFav = _this3.myFavorites.find(function (item) {
          return e.imdbID === item.imdbID;
        });

        e.favorite = findFav !== undefined ? true : false;
        array.push(e);
      });
      return array;
    },
    goToPage: function goToPage(num) {
      this.page = num;
      this.searchMovies();
    },
    maxPage: function maxPage() {
      if (this.totalPages < 5) {
        return this.totalPages;
      } else {
        return 5;
      }
    },
    theme: function theme() {
      var d = new Date();
      d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();

      if (document.querySelector('#app').className === '') {
        document.querySelector('#app').className = 'light';
        document.querySelector('.btn-light').classList.add('btn-dark');
        document.querySelector('.btn-light').innerText = 'Dark';
        document.cookie = "Theme= light" + ";" + expires + ";path=/";
      } else {
        document.querySelector('#app').classList.remove('light');
        document.querySelector('.btn-light').classList.remove('btn-dark');
        document.querySelector('.btn-light').innerText = 'Light';
        document.cookie = "Theme= dark" + ";" + expires + ";path=/";
      }
    }
  },
  mounted: function mounted() {
    if (document.cookie === 'Theme=light') {
      console.log('kek');
      this.theme();
    }
  }
};
Vue.createApp(App).mount('#app');