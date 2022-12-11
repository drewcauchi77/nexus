import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/main.scss';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faArrowRight,
    faPlus,
    faPen,
    faHouseChimney, 
    faLanguage, 
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faPlus, faPen, faHouseChimney, faLanguage);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:3000/graphql',
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});

const app = createApp(App);

app.use(router);
app.use(apolloProvider);

app.component('icon', FontAwesomeIcon);

app.mount('#app');