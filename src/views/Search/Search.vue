<template>
  <div v-if="isClicked" class="search">
    <div class="container">
      <form @submit.prevent="updateSearchHistory" class="search__clicked">
        <input :value="searchFor" class="search__input"
               type='search' placeholder="Поиск"
        @input="updateSearchFor">
        <div class="search__block">
          <div class="search__variants" v-for="item in searchHistory" :key="item.id">
            {{item}}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  props: {
    isClicked: Boolean,
  },
  computed: {
    ...mapState({ searchFor: 'searchFor', searchHistory: 'searchHistory' }),
  },
  methods: {
    updateSearchFor(e) {
      this.$store.commit('updateSearchFor', e.target.value);
      this.$store.dispatch('fetchImages', e.target.value);
    },
    updateSearchHistory(e) {
      this.$store.commit('updateSearchHistory', e.target[0].value);
      console.log(e);
    },
  },
};
</script>
