<template>
  <div style="text-align: center">
    <h1 class="title">Избранное</h1>
    <div>
      <button class="btn" @click="makeOneLine">
        <img src="@/assets/Group11.svg" alt="oneLine">
      </button>
      <button class="btn" @click="makeWholeLine">
        <img src="@/assets/Group10.svg" alt="wholeLine">
      </button>
    </div>
    <div :class="wholeLine ? 'container__whole' : 'container__oneLine'">
      <div v-for="item in favouriteImages" :key="item.id">
        <img :src="item" class="media_cards" @click="goToImage"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Favourites',
  methods: {
    makeOneLine() {
      this.wholeLine = false;
    },
    makeWholeLine() {
      this.wholeLine = true;
    },
    goToImage(e) {
      this.$store.commit('updateCurrentImg', e.target.currentSrc);
      this.$router.push('/image');
    },
  },
  data() {
    return {
      wholeLine: true,
    };
  },
  computed: {
    ...mapState({
      favouriteImages: 'favouriteImages',
    }),
  },
};
</script>
