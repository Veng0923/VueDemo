<template>
    <div >
        <label>{{label}}
            <input v-bind="$attrs"  :value="sync" @input="$emit('update:sync',$event.target.value)"/>
        </label>
    </div>
</template>

<script>
    export default {
        name: "base-input",
        props:['value','label','sync'],
        data:function () {
            return {
                message:"base-input",
            }
        },
        inheritAttrs:false,
        computed:{
            divListeners() {
                const vm = this;
                return Object.assign({},this.$listeners,{
                    input:function (event) {
                        vm.$emit("input",event.target.value);
                    }
                });
            },
        },
    }
</script>

<style scoped>
    input{
        border-color: blueviolet;
        border-radius: 5px;
        border-width: 3px;
    }
</style>