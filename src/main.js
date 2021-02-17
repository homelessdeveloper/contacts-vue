import Vue from 'vue'
import App from './App.vue'
import './assets/style.css';
import Router from 'vue-router';

import router from './router';

Vue.use(Router);
Vue.config.productionTip = false

new Vue({
  router,
  data:{
    
      contacts:{
        1:{
          name:'Andre',
          number:'09737556666'
        }
      }
    
  },
  render: h => h(App),
}).$mount('#app')
