import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

//
import mixin from './libs/mixin'
Vue.mixin(mixin);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')