<template>
  <div id="app" v-if="status === 'ready'">
    <!-- the shorthand for "v-bind" is just ":" -->
    <Header :title="title" v-if="status === 'ready'"/>
    <MoviesList />
  </div>
  <div v-else-if="status === 'not ready'">
    Loading
  </div>
  <div v-else>
    Error
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import MoviesList from './components/MoviesList.vue'

export default {
  name: 'app',
  data(){
    return {
      hello: "Hello World",
      title: "Vue Movie DB",
      isTrue: true,
      status: 'ready'
    }
  },
  components: {
    HelloWorld,
    Header,
    MoviesList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  list-style: none;
}
</style>
