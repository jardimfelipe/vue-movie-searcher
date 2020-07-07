import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import MovieDetails from '@/views/MovieDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
