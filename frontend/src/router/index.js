import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';

import Languages from '@/views/language/Languages.vue';
import EditLanguage from '@/views/language/EditLanguage.vue';
import AddLanguage from '@/views/language/AddLanguage.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/languages',
    name: 'Languages',
    component: Languages,
  },
  {
    path: '/languages/edit/:id',
    name: 'EditLanguage',
    component: EditLanguage,
  },
  {
    path: '/languages/new',
    name: 'AddLanguage',
    component: AddLanguage,
  },
];

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
