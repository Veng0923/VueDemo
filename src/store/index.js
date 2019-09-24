import Vuex from 'vuex';
import Vue from 'vue';
import {COUNT_INCREASE} from './mutation-type';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:1,
    },
    mutations:{
        [COUNT_INCREASE](state){
            state.count++;
        },
    },
    actions:{
        [COUNT_INCREASE](context){
            context.commit(COUNT_INCREASE);
        },
    },
});
export default store;