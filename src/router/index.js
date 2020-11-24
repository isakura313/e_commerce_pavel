import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Video from '../views/Video.vue';
import Books from '../views/Books.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/videocards',
    name: 'Video',
    component: Video,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
