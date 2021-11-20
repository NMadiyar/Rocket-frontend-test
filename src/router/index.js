import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../views/Favourites/Favourites.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search/Search.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/History/History.vue'),
  },
  {
    path: '/image',
    name: 'ImagePage',
    component: () => import('../views/ImagePage/ImagePage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
