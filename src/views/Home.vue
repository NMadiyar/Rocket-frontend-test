<template>
  <div style="text-align: center">
    <h1 class="title">Главная страница</h1>
    <div>
      <button class="btn" @click="makeOneLine">
        <img src="@/assets/Group11.svg" alt="oneLine">
      </button>
      <button class="btn" @click="makeWholeLine">
        <img src="@/assets/Group10.svg" alt="wholeLine">
      </button>
    </div>
    <div :class="wholeLine ? 'container__whole' : 'container__oneLine'">
      <div v-for="item in images" :key="item.id">
        <img :src="item.urls.small" class="media_cards" @click="goToImage"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  mounted() {
    this.fetchImages();
  },
  data() {
    return {
      wholeLine: true,
    };
  },
  computed: {
    ...mapState({
      images: 'images',
    }),
  },
  methods: {
    makeOneLine() {
      this.wholeLine = false;
    },
    makeWholeLine() {
      this.wholeLine = true;
    },
    fetchImages() {
      this.$store.dispatch('fetchImagesHome');
    },
    goToImage(e) {
      this.$store.commit('updateCurrentImg', e.target.currentSrc);
      this.$router.push('/image');
    },
  },
};
</script>

<style>
  .container__whole {
    width: 1368px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap
  }
  .container__oneLine {
    width: 1368px;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
</style>
