<template>
    <div>
        <hr>
    </div>
</template>

<script>
    const mMix = {
        created:function () {
            this.hello();
        },
        methods:{
            hello(){
                console.log('混入的钩子');
                return;
            },
        },
        data:function () {
            return {
                message:"mix",
                foo: 'abc',
            }
        },
    };
    export default {
        name: "mixin-demo",
        mixins: [mMix],
        data: function () {
            return {
                message:"component",
                bar: 'def',
            }
        },
        created(){
            console.log(`component:${this.$data}`);
        },
    }
</script>

<style scoped>

</style>