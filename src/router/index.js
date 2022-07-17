import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Coins from '@/views/Coins.vue';
import TaskCreator from '@/views/taskcreator.vue';
import Circle from '@/views/circleanimation.vue';
import SpotifyOverlay from '@/views/SpotifyOverlay.vue';
import Overlay from '@/views/Overlay.vue';
import Barra from '@/views/barra.vue';
import Quotes from '@/views/Quotes.vue';
import Card from '@/views/Card.vue';
import Teams from '@/views/Teams.vue';

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
    path: '/barra',
    name: 'Barra', 
    component: Barra,
  },
  {
    path: '/quotes',
    name: 'Quotes', 
    component: Quotes,
  },
  {
    path: '/card',
    name: 'Card', 
    component: Card,
  },
  {
    path: '/teams',
    name: 'Teams', 
    component: Teams,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
