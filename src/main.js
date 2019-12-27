import Vue from 'vue'
import vSelect from 'vue-select'
import App from './App'
import 'vue-select/dist/vue-select.css';
import Notifications from 'vue-notification'
import router from './router'


Vue.config.productionTip = false

Vue.use(Notifications)
Vue.component('v-select', vSelect)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
