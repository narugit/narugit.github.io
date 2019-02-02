import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import PageA from '@/components/PageA.vue';
import Gourmet from '@/components/Gourmet.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Gourmet',
      name: 'Gourmet',
      component: Gourmet,
    },
  ],
});
