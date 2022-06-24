import Vue from 'vue';
import Auth from './Auth.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './components/auth/login.vue';
import Register from './components/auth/register.vue';
import Dashboard from './components/auth/dashboard.vue';

const routes = [
    {
        path: '/',
        component: Login,
        name: "Login"
    },
    {
        path: '/register',
        component: Register,
        name: "Register"
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: "Dashboard",
        meta: {
            requiresAuth: true
        }
    }
];

 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) ) {
        if (Auth.check()) {
            next();
            return;
        } else {
            router.push('/');
        }
    } else {
        next();
    }
});

export default router;