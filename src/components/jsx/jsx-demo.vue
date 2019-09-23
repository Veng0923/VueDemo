<template>
    <div>
        <jsx :blogTitle="blogTitle"></jsx>
    </div>
</template>

<script>
    import Vue from 'vue';

    Vue.component('jsx', {
        functional: true,
        render(createElement, context) {
            return createElement('h1', this.blogTitle);
        },
        props:{
            blogTitle:String,
        }
    });
    export default {
        name: "jsx-demo",
        data:function () {
            return {
                blogTitle: "blogTitle",
            }
        }
    }
</script>

<style scoped>

</style>