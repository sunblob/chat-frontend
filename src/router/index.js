import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ChatPage from '../views/ChatPage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/chat/:id',
		name: 'ChatPage',
		component: ChatPage,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
