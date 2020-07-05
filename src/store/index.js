import Vue from 'vue';
import Vuex from 'vuex';
import VuexModules from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  VuexModules,
});
