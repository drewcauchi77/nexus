import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import { languageRoutes } from '@/router/languages';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    ...languageRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;