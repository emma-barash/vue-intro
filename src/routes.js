import Vue from 'vue';
import MoviesList from './components/MoviesList.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
mode: 'history',
// routes is looking for an array of objects
routes: [
    {
        path: '/',
        name: 'Movies List',
        component: MoviesList
    }
]
})