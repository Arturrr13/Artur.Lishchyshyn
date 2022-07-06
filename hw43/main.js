const movieItem = {
    props: ['movie'],
    methods: {
        addInFavorite(id){
            this.$emit('addInFavorite', id)
        },
        getInfo(id){
            this.$emit('getInfo', id)
        }
    },
    template: '#movieItem'
}

const Pagination = {
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        },
        newMax: {
            type: Number,
            default: 1,
            required: true
        }
    },
    methods: {
        goToPage(num) {
            this.$emit ('goToPage', num)
        },
        number(p){
            if(p<=4){return 0}
            if(p < this.total - 1){
                return (p >= 5) ? (p - 3) : 0
            } else {
                return (p - 5)
            }
        }
    },
    template: '#pagination'
}

const App = {
    data() {
        return {
            API_KEY: 'e6735353',
            search: 'batman',
            movieYear: '',
            movieList: [],
            movieInfo: {},
            showModal: false,
            select: 'movie',
            myFavorites: [],
            ratings: ['','',''],
            totalPages: 0,
            page: 1,
            lastSearch: '',
        }
    },
    components: {
        movieItem,
        Pagination
    },
    created (){
        this.myFavorites = JSON.parse(localStorage.getItem('favorites'))
    },
    methods: {
        searchMovies() {
            this.lastSearch !== this.search ? this.page = 1 : console.log("LOL")
            if(this.search !== ''){
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}&y=${this.movieYear}&page=${this.page}`)
                .then(res => {
                    this.movieList = res.data.Search
                    this.totalPages = Math.ceil(res.data.totalResults / 10)
                    this.lastSearch = this.search
                    if(this.totalPages < 5) { this.newMax = this.totalPages} else {this.newMax = 5}
                })
                .catch(function (err) {
                    console.log(err)
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
                    this.ratings[0] = parseFloat(this.movieInfo.Ratings[0].Value) * 10
                    this.ratings[1] = parseFloat(this.movieInfo.Ratings[1].Value)
                    this.ratings[2] = parseFloat(this.movieInfo.Ratings[2].Value)
                })
                .catch(function (err) {
                    console.log(err)
                })
            }
        },
        addInFavorite(id){
            const index = this.movieList.findIndex( e => e.imdbID === id)
            const index2 = this.myFavorites.findIndex( e => e.imdbID === id)
            if(index2 === -1){
                let el = this.movieList[index]
                el.favorite = true
                this.myFavorites.push(el)
             } else {
                this.myFavorites.splice(index2, 1) 
             }
            localStorage.setItem('favorites', JSON.stringify(this.myFavorites))
        },
        movieListWithFavorite() {
            let array = []
            this.movieList.forEach( e => {
                let findFav = this.myFavorites.find(item => {
                    return e.imdbID === item.imdbID
                })
                e.favorite = findFav !== undefined ? true : false
                array.push(e)
            })
            return array
        },
        goToPage (num){
            this.page = num
            this.searchMovies()
        },
        maxPage (){
            if(this.totalPages < 5) { return this.totalPages} else {return 5}
        },
        theme(){
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();

            if(document.querySelector('#app').className === ''){ 
                document.querySelector('#app').className = 'light'
                document.querySelector('.btn-light').classList.add('btn-dark')
                document.querySelector('.btn-light').innerText = 'Dark'
                document.cookie = "Theme= light" + ";" + expires + ";path=/";
            } else { 
                document.querySelector('#app').classList.remove('light') 
                document.querySelector('.btn-light').classList.remove('btn-dark') 
                document.querySelector('.btn-light').innerText = 'Light'
                document.cookie = "Theme= dark" + ";" + expires + ";path=/";
            }
        }
    },
    mounted() {
        if(document.cookie === 'Theme=light'){
            console.log('kek')
            this.theme()
        }
    }
}
Vue.createApp(App).mount('#app')