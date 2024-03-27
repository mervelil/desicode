import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import GAuth from 'vue-google-oauth2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import './app.css'



Vue.use(BootstrapVue)
Vue.config.productionTip = false
// Font Awesome ikonlarını kütüphaneye ekle
library.add(faUser, faLock)
const gauthOption = {
  clientId: '558724910287-1p70g6li072ru1pq2tq1n814aktkml5h.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

// FontAwesomeIcon bileşenini Vue kullanımına ekleyin:

/* import specific icons */
// createApp(App).mount('#app')
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
