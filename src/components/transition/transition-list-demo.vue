
<template>
    <div>
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <br>
            <transition-group name="fade" tag="ul">
                    <li v-for="item in items" :key="item">
                        <span>{{item}}</span>
                    </li>
            </transition-group>
    </div>
</template>

<script>
    import {test} from '../util';

    export default {
        name: "transition-list-demo",
        props:['items'],
        methods:{
            getRandom: function () {
                return test();
            },
            add(){
                this.items.splice(this.getRandom(),0,Math.max(...this.items)+1);
            },
            remove(){
                this.items.splice(this.getRandom(),1);
            },
        },
    }
</script>

<style scoped>
    @import "../fade.css";
</style>