<template>
    <div>
        <span>
            <slot :user="user">
                {{user.name}}
            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "slot-scope",
        data:function () {
            return {
                user:{
                    name:"veng",
                    age:22,
                },
            }
        },
    }
</script>

<style scoped>

</style>