import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue');
const Login = () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue');
const Register = () => import(/* webpackChunkName: "register" */ '@/views/register/Register.vue');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
