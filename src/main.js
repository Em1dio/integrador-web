import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueTablerIcons from 'vue-tabler-icons';

Vue.config.productionTip = true;
Vue.use(VueTablerIcons);

Vue.filter('toPercent', function (value) {
  if (typeof value !== 'number') {
    return value;
  }
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
