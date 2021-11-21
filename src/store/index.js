import Vue from 'vue';
import Vuex from 'vuex';
import { createApi } from 'unsplash-js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {},
    favouriteImages: [],
    searchFor: '',
    searchHistory: [],
    currentImg: '',
    firstName: '',
  },
  mutations: {
    updateImages(state, response) {
      state.images = response;
    },
    updateSearchFor(state, string) {
      state.searchFor = string;
    },
    cleanSearchFor(state, string) {
      state.searchFor = string;
    },
    updateSearchHistory(state, arr) {
      state.searchHistory.push(arr);
    },
    updateCurrentImg(state, url) {
      state.currentImg = url;
    },
    updateFavouriteImages(state, url) {
      state.favouriteImages.push(url);
    },
    updateFirstName(state, firstName) {
      state.firstName = firstName;
    },
  },
  actions: {
    fetchImages({ commit }, string = '') {
      const api = createApi({
        accessKey: 'errgYbTwle0vFGxQkLWqrBw8liUz4SpeXZb9Sj9Yh2Y',
      });
      api.search
        .getPhotos({
          query: string,
          orientation: 'landscape',
        })
        .then((res) => {
          commit('updateImages', res.response.results);
          commit('updateSearchFor', string);
          console.log(res.response.results);
        });
    },
    fetchImagesHome({ commit }) {
      const api = createApi({
        accessKey: 'errgYbTwle0vFGxQkLWqrBw8liUz4SpeXZb9Sj9Yh2Y',
      });
      api.search
        .getPhotos({
          query: 'cats',
          orientation: 'landscape',
        })
        .then((res) => {
          commit('updateImages', res.response.results);
        });
    },
  },
  modules: {
  },
});
