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

const App = {
    data() {
        return {
            API_KEY: 'e6735353',
            search: '',
            movieList: [],
            movieInfo: {},
            showModal: false,
            select: 'movie',
            myFavorites: [],
            myFavorit: {}
        }
    },
    components: {
        movieItem
    },
    created (){
        const el = localStorage.getItem('favorites')
        this.myFavorit = JSON.parse(el)
        for(key in this.myFavorit){
            this.myFavorites.push(this.myFavorit[key])
        }
    },
    methods: {
        searchMovies() {
            if(this.search !== ''){
                axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}`)
                .then(res => {
                    this.movieList = res.data.Search
                })
                .catch(function (err) {
 
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
        }
    }
}

Vue.createApp(App).mount('#app')