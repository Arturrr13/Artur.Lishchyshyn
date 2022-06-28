const App = {
    data() {
        return {
            API_KEY: 'e6735353',
            search: '',
            movieList: [],
            movieInfo: {},
            showModal: false
        }
    },
    methods: {
        searchMovies() {
            if(this.search !== ''){
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
                .then(res => {
                    this.movieList = res.data.Search
                })
                .catch(function (err) {
                    console.log(err)
                })
                .then(function () {
                    
                })
            }
        },
        showInfo(){
            this.showModal = true
        },
        getInfo(id){
            if(this.search !== ''){
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
                .then(res => {
                    this.movieInfo = res.data
                    this.showInfo()
                })
                .catch(function (err) {
                    console.log(err)
                })
                .then(function () {
                    
                })
            }
        }
    }
}

Vue.createApp(App).mount('#app')