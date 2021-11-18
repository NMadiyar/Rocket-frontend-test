<template>
  <div style="text-align: center">
    <h1 class="title">Главная страница</h1>
    <div>
      <button class="btn">
        <img src="@/assets/Group11.svg" alt="oneLine">
      </button>
      <button class="btn">
        <img src="@/assets/Group10.svg" alt="wholeLine">
      </button>
    </div>
    <div class="container"
         style="display: flex;
     justify-content: space-between;
      align-items: center;
      gap: 25px">
      <img :src="images" width="33%"/>
      <img :src="images" width="33%"/>
      <img :src="images" width="33%"/>
    </div>
  </div>
</template>

<script>
import { createApi } from 'unsplash-js';
// import instance from '../axios';

const api = createApi({
  accessKey: 'errgYbTwle0vFGxQkLWqrBw8liUz4SpeXZb9Sj9Yh2Y',
});

export default {
  name: 'Home',
  mounted() {
    // instance.get('/photos/?orientation=portrait')
    //   .then((res) => {
    //     this.images = res;
    //     console.log(res);
    //   });
    api.photos
      .getRandom()
      .then((res) => {
        this.images = res.response.urls.raw;
        console.log(res);
      });
  },
  data() {
    return {
      images: {},
    };
  },
};
</script>

<style>
</style>
