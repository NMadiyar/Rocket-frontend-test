<template>
    <div class="header">
        <div class="container"
             style="display: flex;
              justify-content: space-between;
               align-items: center">
          <router-link to="/" class="header__logo">
            <img src="@/assets/unsplash.svg" alt="logo" style="margin-right: 18px">ImageStock
          </router-link>
          <div class="header__block">
            <button type="button" class="header__buttons">
              <img src="@/assets/Group13.svg" alt="Search"
              style="margin-right: 10px">Поиск
            </button>
            <router-link to="/favourites" type="button" class="header__buttons">
              <img src="@/assets/Group4.svg" alt="Favourites"
                   style="margin-right: 10px">Избранное
            </router-link>
            <button type="button" class="header__buttons">
              <img src="@/assets/history_24px.svg" alt="Search history"
                   style="margin-right: 10px">История поиска
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
