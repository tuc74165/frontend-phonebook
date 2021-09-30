import Vue from 'vue';
import App from './App.vue';
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import { store } from './store/store';

Vue.config.productionTip = false;
Vue.component('vue-phone-number-input', VuePhoneNumberInput);

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
