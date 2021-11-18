<template>
  <div style="text-align: center">
    <h1 class="title">Избранное</h1>
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
export default {
  name: 'Favourites',
};
</script>
