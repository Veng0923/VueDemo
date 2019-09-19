<template>
    <div>
        <label>
            <input type="checkbox" :checked="checked" @change="$emit('change',$event.target.checked)"/>
            {{label}}
        </label>
    </div>


</template>
<script>
    export default {
        name: "base-checkbox",
        model:{
            prop:"checked",
            event:"change",
        },
        props:{
            checked:Boolean,
            label:String,
        },
        methods:{
        }


    }
</script>

<style scoped>

</style>