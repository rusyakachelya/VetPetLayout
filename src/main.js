import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

new Vue({
  VueCarousel,
  router,
  render: h => h(App)
}).$mount('#app')
