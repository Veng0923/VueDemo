<template>
    <div>
        <hr>
        <label>search:
            <input type="text" v-model="queryText">
        </label>
        <transition-group name="staggered-fade"
                          tag="ul"
                          :css="false"
                          @before-enter="beforeEnter"
                          @enter="enter"
                          @leave="leave">
            <li v-for="(item,index) in filterList"
                :key="item"
                :data-index="index"
                >
                {{item}}</li>
        </transition-group>
    </div>
</template>
<script>
    import Velocity from 'velocity-animate';
    export default {
        name: "input-transition-demo",
        data: function() {
            return {
                items:['111','222','31434','23412','12341','1234143'],
                queryText:"",
            }
        },
        computed:{
            filterList(){
                return this.items.filter(x=>{
                    return x.indexOf(this.queryText)!==-1;
                });
            },
        },
        methods:{
            beforeEnter(el){
                el.style.opacity = 0;
                el.style.height = 0;
            },
            enter(el,done){
                let delay = el.dataset.index*150;
                Velocity(el,{
                    opacity:1,
                    height:"1.6em",
                },{
                    complete:done,
                    delay:delay,
                });
            },
            leave(el,done){
                let delay = el.dataset.index*150;
                Velocity(el,{
                    opacity: 0,
                    height: 0,
                },{
                    delay:delay,
                    complete:done,
                });
            },
        },
    }
</script>

<style scoped>
    /*.list-enter,.list-leave-to{*/
    /*    opacity: 0;*/
    /*    transform: translateY(-30px);*/
    /*}*/
    /*.list-enter-active, .list-leave-active {*/
    /*    transition: all 0.5s;*/
    /*}*/
</style>