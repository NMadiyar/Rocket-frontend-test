import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {},
  },
  mutations: {
    updateImages(state, response) {
      state.images = response;
    },
  },
  actions: {
    fetchImages() {
      axios.get('/oauth/applications/276581');
    },
  },
  modules: {
  },
});
