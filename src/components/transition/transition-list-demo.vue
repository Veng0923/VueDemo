
<template>
    <div>
        <hr/>
        <el-button size="mini" @click="add">add</el-button>
        <el-button size="mini" @click="remove">remove</el-button>
        <el-button size="mini" @click="shuffle" plain>shuffle</el-button>
        <br>
            <transition-group name="fade" tag="ul">
                    <li v-for="item in items" :key="item">
                        <span>{{item}}</span>
                    </li>
            </transition-group>
        <transition-group name="fade-shuffle" tag="ul">
            <li v-for="item in items" :key="item">
                <span>{{item}}</span>
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "transition-list-demo",
        props:{
            items:Array,
        },
        methods:{
            getRandom: function () {
                return Math.random()*this.items.length;
            },
            add(){
                this.items.splice(this.getRandom(),0,Math.max(...this.items)+1);
            },
            remove(){
                this.items.splice(this.getRandom(),1);
            },
            shuffle(){
                this.items.sort(()=>{
                    return Math.random()-0.5;
                });
            },
        },
    }
</script>

<style scoped>
    @import "../fade.css";
    .fade-shuffle-move{
        transition: transform 1s;
    }
</style>