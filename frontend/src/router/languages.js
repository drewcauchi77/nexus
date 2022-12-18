import Languages from '@/views/language/Languages.vue';
import EditLanguage from '@/views/language/EditLanguage.vue';
import AddLanguage from '@/views/language/AddLanguage.vue';

export const languageRoutes = [
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
    }
];