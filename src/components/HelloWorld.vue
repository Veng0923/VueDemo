<template>
    <div>
        <language v-for="language in languages" :key="language.id" :item-language="language"></language>
    </div>
</template>

<script>
    import language from "@/components/language";
    export default {
        name: "HelloWorld",
        components:{
            language
        },
        data:function () {
            return {
                languages:[
                    {id:1,name:"javascript"},
                    {id:2,name:"java"},
                    {id:3,name:"python"},
                ]
            }
        },
    }

</script>

<style scoped>

</style>