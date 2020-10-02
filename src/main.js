import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', VSelect);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
