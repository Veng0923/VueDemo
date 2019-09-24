<template>
    <div>
        <br>
        <el-input class="input-width" size="small" v-model="query"></el-input>
<!--        <input v-model="query"/>-->
        <p>{{query|capitalize}}</p>
    </div>
</template>

<script>
    export default {
        name: "filter-demo",
        data: function () {
            return {
                query:'',
            }
        },
        filters:{
            capitalize: function (value) {
                value = value || "";
                value = value.toString();
                return value.charAt(0).toUpperCase()+value.slice(1);
            }
        }
    }
</script>

<style scoped>
    .input-width{
        width: 150px;
    }
</style>