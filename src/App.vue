<template>
  <div id="app">
    <Header :is-clicked="clicked" :is-history-clicked="clickedHistory"
            @open="openSearch" @openHistory="openHistory"></Header>
    <Search :is-clicked="clicked"></Search>
    <History :is-clicked-history="clickedHistory"></History>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './layouts/components/Header.vue';
import Search from './views/Search/Search.vue';
import History from './views/History/History.vue';

export default {
  name: 'App',
  components: {
    History,
    Search,
    Header,
  },
  data() {
    return {
      clicked: false,
      clickedHistory: false,
    };
  },
  methods: {
    openSearch() {
      if (this.clicked) {
        this.clicked = false;
      } else {
        this.clicked = true;
      }
    },
    openHistory() {
      if (this.clickedHistory) {
        this.clickedHistory = false;
      } else {
        this.clickedHistory = true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
