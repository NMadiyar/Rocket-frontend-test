<template>
  <div v-if="isClickedHistory" class="history">
    <div class="container">
      <div class="search__clicked">
        <h1 class="history__title">Ваши запросы</h1>
        <div class="history__block">
          <div class="history__query" v-for="item in searchHistory" :key="item">
            <button class="history__btn" @click="updateSearch">{{item}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'History',
  props: {
    isClickedHistory: Boolean,
  },
  computed: {
    ...mapState({
      searchHistory: 'searchHistory',
    }),
  },
  methods: {
    updateSearch(e) {
      this.$store.dispatch('fetchImages', e.target.innerText);
    },
  },
};
</script>
