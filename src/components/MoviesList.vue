<template>
    <div>
    {{ movie.title }}
    </div>
</template>
<script>
import { async } from 'q';
export default {
    name: 'Movies List',
    // this is the default state
    data() {
        return {
            movie: {

            }
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
                    'put api here!'
                    );
                const movie = await res.json();
                this.movie = movie;
            } catch (e){
                console.log(e);
            }
        }
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
</style>

