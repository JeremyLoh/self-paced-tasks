import Vuex from 'vuex';
import Vue from 'vue';
import contact from "./modules/contact";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    contact,
  }
});
