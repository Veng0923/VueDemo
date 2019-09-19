<template>
    <div>
        <hr>
        <el-button @click="shuffle" plain>shuffle</el-button>
        <transition-group name="outside" tag="div" class="outside">
            <div class="cell" v-for="number in numbers" :key="number.id">{{number.data}}</div>
        </transition-group>
    </div>
</template>

<script>
    import {random,shuffle} from "@/components/utils/RandomUtil";

    export default {
        name: "nine-transition-demo",
        data:function () {
            return {
                numbers:[],
            }
        },
        created:function () {
            this.initNumbers();
        },
        methods:{
            initNumbers(){
                for(let i = 0;i<81;i++){
                    this.numbers.push({id:i,data:random(1,9)});
                }
            },
            shuffle(){
                shuffle(this.numbers);
            }
        },
    }
</script>

<style scoped>

    .outside{
        width: 290px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .cell{
        width: 30px;
        height: 30px;
        border-color: gray;
        border-width: 1px;
        border-style: solid;
        text-align: center;
    }
    @keyframes transform {

    }
    .outside-move{
        transition: transform 2s;
    }
</style>