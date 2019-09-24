<template>
    <div>
        <hr>
        <el-row :gutter="20">
            <el-col :span="1">
                <span>store:&nbsp;&nbsp;{{count}}</span>
            </el-col>
            <el-col :span="1">
                <el-button size="small" icon="el-icon-plus" @click="increase"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "vuex-demo",
        data:function () {
            return {

            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        methods: {
            increase(){
                this.$store.commit(`increase`);
            },
        },
    }
</script>

<style scoped>

</style>