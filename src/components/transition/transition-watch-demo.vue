<template>
    <div>
        <hr>
        <label>
            <input type="number" step="20" v-model.number="number"/>
        </label>
        <p>{{animateNumber}}</p>

    </div>
</template>

<script>
    import {TweenLite} from 'gsap';
    export default {
        name: "transition-watch-demo",
        data: function () {
            return {
                number: 0,
                tweenedNumber: 0,

            }
        },
        computed: {
            animateNumber(){
                return this.tweenedNumber.toFixed(0);
            },
            currentColor(){
                return this.background.colorProps.backgroundColor;
            }
        },
        watch:{
            number: function(newValue) {
                const data = this.$data;
                TweenLite.to(data,0.5,{tweenedNumber: newValue});
            },

        },
        methods:{

        }
    }
</script>

<style scoped>
    .color-div{
        width: 60px;
        height: 60px;
    }
    .input{
        width: 10%;
    }
</style>