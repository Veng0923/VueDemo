<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <BaseCheckbox v-model="checked" :label="label"  ></BaseCheckbox>
        <BaseInput @click="click" :sync.sync="username" :label="'username:'" :message="message"/>
        <HelloSlot><i>veng</i></HelloSlot>
        <SlotBaseLayout>
            <template slot="header">
                header
            </template>
            <template>
                main
            </template>
            <template v-slot:footer>
                footer
            </template>
        </SlotBaseLayout>
        <SlotScope>
            <template slot-scope="{user}">
              {{user.age}}
            </template>
        </SlotScope>
        <TransitionDemo :is-editing="isEditing" :docState="on" @click="toggle"></TransitionDemo>
        <TransitionListDemo :items.sync="items"></TransitionListDemo>
        <Width100Demo></Width100Demo>
        <NineTransitionDemo></NineTransitionDemo>
        <InputTransitionDemo></InputTransitionDemo>
        <TransitionWatchDemo></TransitionWatchDemo>
        <MixinDemo></MixinDemo>
        <InstructDemo></InstructDemo>
        <JsxDemo></JsxDemo>
    </div>
</template>

<script>
    import HelloWorld from "@/components/HelloWorld";
    import BaseInput from "@/components/base-input";
    import BaseCheckbox from "@/components/base-checkbox";
    import HelloSlot from "@/components/slot/hello-slot";
    import SlotBaseLayout from "@/components/slot/slot-base-layout";
    import SlotScope from "@/components/slot/slot-scope";
    import TransitionDemo from "@/components/transition/transition-demo";
    import TransitionListDemo from "@/components/transition/transition-list-demo";
    import Width100Demo from "@/components/width100-demo";
    import NineTransitionDemo from "@/components/transition/nine-transition-demo";
    import InputTransitionDemo from "@/components/transition/input-transition-demo";
    import TransitionWatchDemo from "@/components/transition/transition-watch-demo";
    import MixinDemo from "@/components/mix/mixin-demo";
    import InstructDemo from "@/components/instruct/instruct-demo";
    import JsxDemo from "@/components/jsx/jsx-demo";
    export default {
        name: 'app',
        components: {
            JsxDemo,
            InstructDemo,
            MixinDemo,
            TransitionWatchDemo,
            InputTransitionDemo,
            NineTransitionDemo,
            Width100Demo,
            TransitionListDemo,
            TransitionDemo,
            SlotScope,
            SlotBaseLayout,
            HelloSlot,
            BaseCheckbox,
            BaseInput,
            HelloWorld,
        },
        data: function () {
            return {
                checked: false,
                username: '',
                label: "basketball",
                message: "app",
                isEditing:false,
                on:true,
                items:[1,2,3,4,5,6,7,8,9],
            }
        },
        methods: {
            change() {
                alert(this.checked);
            },
            click() {
                alert(`点击box`);
            },
            toggle(){
                this.on = !(this.on);
            },
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
