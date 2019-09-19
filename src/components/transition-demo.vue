<template>
    <div>
        <transition name="fade">
            <p v-show="show">hello</p>
        </transition>
        <button @click="show=!show">
            Toggle
        </button>
        <br>
        <transition name="fade">
            <button v-if="isEditing" key="save">
                Save
            </button>
            <button v-else key="edit">
                Edit
            </button>
        </transition>
        <br>
        <transition name="fade" mode="out-in">
            <button :key="docState" @click="$emit('click')">
                {{ buttonMessage }}
            </button>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "transition-demo",
        props:['isEditing','docState'],
        data: function () {
            return {
                show:true,
            };
        },
        computed:{
            buttonMessage:function () {
                return this.docState?"on":"off";
            }
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>