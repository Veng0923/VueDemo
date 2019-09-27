import Vue from 'vue';
import VueRouter from 'vue-router';

import VuexDemo from "@/components/vuex/vuex-demo";
import NineTransitionDemo from "@/components/transition/nine-transition-demo";
import Dynamic from '@/components/router/dynamic-router';
import Child from '@/components/router/child-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        // components: {
        //     default: VuexDemo,
        //     a: NineTransitionDemo,
        //     b: Dynamic,
        //
        // },
        redirect:'/nine',
        // alias:'/alias/nine',
    },
    {path: '/vue-demo', name: 'vueDemo', component: VuexDemo},
    {path: '/nine', name: 'nine', component: NineTransitionDemo,alias:'/vue-demo'},
    {
        path: '/dynamic/:id', name: 'dynamic', component: Dynamic,
        children: [{
            path: 'child', component: Child, name: 'child'
        }],
    },
];
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior:(to,from,savedPosition)=>{
        return {x:0,y:20};
    },
});
export default router;