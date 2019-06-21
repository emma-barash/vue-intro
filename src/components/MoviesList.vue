<template>
    <ul>
        <li v-for="movie in movies">
            <!-- the movie in the string is the movie from the 'for-loop' -->
            <Movie :movie="movie" />
        </li>
    </ul>
</template>
<script>
import { async } from 'q';
import Movie from './Movie.vue'
export default {
    name: 'MoviesList',
    // this is the default state
    data() {
        return {
            movies: []
        }
    },
    // this is a lifecycle method!
    created: function(){
        this.fetchData();
    },
    methods: {
        // with an async you need both a "try" and a "catch"
        fetchData: async function() {
            try{
                // await the data to return from the API
                const res = await fetch(
                    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23693eab3d72e649be5dc6a8b3828c1d'
                    );
                const movies = await res.json();
                this.movies = movies.results;
            } catch (e){
                console.log(e);
            }
        }
    },
    components:{
        Movie
    }
}
</script>

<style scoped>
    header{
        background-color: #111;
        padding: 20px;
        color: white;
    }
    h1{
        margin: 0;
    }
    ul{
        display: grid;
        padding: 1rem;
        grid-row-gap: 1rem;
        margin: 0;
        grid-template-columns: repeat(6, 1fr)
    }
</style>

