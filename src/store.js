import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'pending',
  },
  getters: {
    status: state => state.status,
  },
  mutations: {
    updateStatus(state, status) {
      Vue.set(state, 'status', status);
      console.log(`store - updateStatus called, status: ${this.state.status}`);
    },
  },
  actions: {
    // https://stackoverflow.com/questions/46097687/vuex-passing-multiple-parameters-to-action
    async fetchApi({ commit }, test) {
      try {
        console.log(`store - passed in parameter - ${test}`);
        console.log(`store -  before fetchApi called, status: ${this.state.status}`);
        await api.get();
        console.log(`store - fetchApi called, status: ${this.state.status}`);
        commit('updateStatus', 'success');
        console.log(`store - updateStatus committed from fetchApi, status: ${this.state.status}`);
      } catch (e) {
        console.error(e);
        commit('updateStatus', 'error');
      }
    },
  },
});
