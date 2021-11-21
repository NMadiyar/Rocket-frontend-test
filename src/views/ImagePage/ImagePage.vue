<template>
  <div class="imagePage" :style=getBackground()>
  <div class="container">
    <div class="imagePage__block">
      <div class="imagePage__box">
        <div class="history__user">
          <img  />
          <p></p>
          <p></p>
        </div>
        <button class="imagePage__btn" @click="updateFavouriteImages">
          <img src="@/assets/favorites.svg" alt="favourite">
        </button>
        <a :href="currentImg" download
           target="_blank" class="imagePage__btn">
          <img src="@/assets/download.svg" alt="download">
        </a>
      </div>
      <img :src="currentImg" width="100%" class="imagePage__img"/>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ImagePage',
  computed: {
    ...mapState({
      currentImg: 'currentImg',
      favouriteImages: 'favouriteImages',
    }),
  },
  methods: {
    getBackground() {
      return `background: url("${this.currentImg}");
      width: 100%;
      background-size: cover;`;
    },
    updateFavouriteImages() {
      this.$store.commit('updateFavouriteImages', this.currentImg);
      alert('Добавлено в избранное!');
    },
  },
};
</script>
