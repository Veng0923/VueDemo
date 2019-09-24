<template>
    <div>
        param: {{$route.params.id}}
        <el-row>
            <el-col>
                <el-button @click="toChild">go child</el-button>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "dynamic-router",
        methods:{
            toChild(){
                this.$router.push(`/dynamic/${this.$route.params.id}/child`);
            },
        }
    }
</script>

<style scoped>

</style>