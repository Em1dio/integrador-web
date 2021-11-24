import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Coins from '@/views/Coins.vue';
import Musica from '@/views/Musica.vue';
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
    path: '/coins',
    name: 'Coins',
    component: Coins,
  },
  {
    path: '/musica',
    name: 'Musica',
    component: Musica,
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
