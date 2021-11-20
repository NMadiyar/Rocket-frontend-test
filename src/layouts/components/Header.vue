<template>
    <div class="header" id="mainHeader">
        <div class="container"
             style="display: flex;
              justify-content: space-between;
               align-items: center">
          <router-link to="/" class="header__logo">
            <img src="@/assets/unsplash.svg" alt="logo" style="margin-right: 18px">ImageStock
          </router-link>
          <div class="header__block">
            <button type="button"
             @click='openSearch' class="header__buttons">
              <img src="@/assets/Group13.svg" alt="Search"
                   class="header__images"><p>Поиск</p>
            </button>
            <router-link to="/favourites"
             active-class="header__buttons--active" class="header__buttons">
              <img src="@/assets/Group4.svg" alt="Favourites"
                   class="header__images"><p>Избранное</p>
            </router-link>
            <button
              @click="openHistory" class="header__buttons">
              <img src="@/assets/history_24px.svg" alt="Search history"
                   class="header__images"><p>История поиска</p>
            </button>
          </div>
        </div>
      <a href="#mainHeader"
         style="position: fixed;
                bottom: 0;
                right: 200px" >
        <img
             src="@/assets/Group9.2.svg" alt="Up" width="50px" height="50px">
      </a>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isClicked: Boolean,
    isHistoryClicked: Boolean,
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    openSearch() {
      this.$emit('open');
    },
    openHistory() {
      this.$emit('openHistory');
    },
  },
};
</script>

<style scoped>
</style>
