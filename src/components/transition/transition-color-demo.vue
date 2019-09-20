<template>
    <div>
        <hr>
        <el-input @keydown.enter="updateColor" type="text" v-model="inputColor" placeholder="please input color"
                  class="input"></el-input>
        <el-button @click="updateColor">update</el-button>
        <div class="color-div" :style="{backgroundColor:currentColor}">

        </div>
        <p>
            {{currentColor}}
        </p>
    </div>
</template>

<script>
    import Color from 'color';
    export default {
        name: "transition-color-demo",
        data:function () {
            return {
                backgroundColor:'#000000',
                inputColor:'',
            }
        },
        computed:{
            rgbBackgroundColor:function () {
                return new Color(this.backgroundColor).toRgb();
            }
        },
        methods:{
            updateColor(){

            },
        }
    }
</script>

<style scoped>

</style>