import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Gourmet from './components/Gourmet.vue';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const Routes = [
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
];

const router = new Router({
  routes: Routes,
  mode: 'history',
  linkActiveClass: 'active',
});

Vue.use(Router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
