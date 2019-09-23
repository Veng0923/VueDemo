<template>
    <div>
        <hr>
        <el-input class="input" size="small" v-focus:foo.a.b="100"/>
        <!--        <input type="text" class="input" v-focus>-->
    </div>
</template>

<script>
    export default {
        name: "instruct-demo",
        data: function () {
            return {
                message:"message-demo",
            };
        },
        directives: {
            focus: {
                inserted: function (e,b,v) {
                    e.focus();
                    const name = b.name;
                    const value = b.value;
                    const expression = b.expression;
                    const arg = b.arg;
                    const modifiers = b.modifiers;
                    console.log(name,value,expression,arg,modifiers);
                },
            },
        },
    }
</script>

<style scoped>
    .input {
        width: 15%;
    }
</style>