import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css';

import './style/global.css';

import VSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import titleMixin from './mixins/titleMixin';

Vue.mixin(titleMixin);

Vue.component('v-select', VSelect);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
