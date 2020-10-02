import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/chat/:id',
        name: 'Chat',
        component: Chat,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
