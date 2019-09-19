<template>
    <div id="background">
        <div id="foreground">
            <div id="content">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "width100-demo"
    }
</script>

<style scoped>
    div#background{
        width: 60px;
        height: 60px;
        background-color: black;
    }
    div#foreground{
        width: 100%;
        height: 100%;
    }
    div#content{
        width: 100px;
        height: 100%;
        background-color: chartreuse;
    }
</style>