import { createApp } from 'vue';
import { provideApolloClient } from '@vue/apollo-composable';
import App from '@/App.vue';
import router from '@/router';
import apolloClient from '@/apollo/setup';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/font-awesome/icons';
import '@/assets/main.scss';

import Button from '@/components/Button.vue';

const app = createApp(App);

app.component('icon', FontAwesomeIcon);
app.component('button-vue', Button);

provideApolloClient(apolloClient)
app.use(router);
app.mount('#app');