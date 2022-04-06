import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Coins from '@/views/Coins.vue';
import TaskCreator from '@/views/taskcreator.vue';
import Circle from '@/views/circleanimation.vue';
import SpotifyOverlay from '@/views/SpotifyOverlay.vue';
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
    path: '/circle',
    name: 'circle',
    component: Circle,
  },
  {
    path: '/coins',
    name: 'Coins',
    component: Coins,
  },
  {
    path: '/task-creator',
    name: 'TaskCreator',
    component: TaskCreator,
  },
  {
    path: '/spotify-overlay',
    name: 'Musica',
    component: SpotifyOverlay,
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
