import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Overlay from '@/views/Overlay.vue';
import Quotes from '@/views/Quotes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/barra-github',
    name: 'Overlay', 
    component: Overlay,
  },
  {
    path: '/quotes',
    name: 'Quotes', 
    component: Quotes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
