"use strict";

var App = {
  data: function data() {
    return {
      API_KEY: 'e6735353',
      search: '',
      movieList: [],
      movieInfo: {},
      showModal: false
    };
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      if (this.search !== '') {
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search)).then(function (res) {
          _this.movieList = res.data.Search;
        })["catch"](function (err) {
          console.log(err);
        }).then(function () {});
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
        })["catch"](function (err) {
          console.log(err);
        }).then(function () {});
      }
    }
  }
};
Vue.createApp(App).mount('#app');