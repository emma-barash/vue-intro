<template>
    <header>
        <h1>{{ newTitle }}</h1>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: String
    },
    data() {
        return {
            name: 'Movie DB - First Vue App'
        }
    },
    computed:{
        newTitle: function(){
            console.log();
            console.log(this.title);
            console.log(this);
            return this.name
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

