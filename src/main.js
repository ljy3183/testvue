import Vue from 'vue'
import App from './App.vue'
import VueYoutube from 'vue-youtube'
import VueCookie from 'vue-cookie'  // vue에서 쿠키사용가능하게 해줍니다.

Vue.config.productionTip = false
Vue.use(VueYoutube) // 유튜브 영상재생
Vue.use(VueCookie) // 쿠키사용

new Vue({
  render: h => h(App),
}).$mount('#app')
