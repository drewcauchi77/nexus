import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/main.scss';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option'

// Importing Global Components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Loading from '@/components/Loading.vue';
import Button from '@/components/Button.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faArrowRight,
    faPlus,
    faPen,
    faFloppyDisk,
    faHouseChimney, 
    faGlobe,
    faLanguage, 
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight, faPlus, faPen, faFloppyDisk, faHouseChimney, faGlobe, faLanguage);

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
app.component('loading', Loading);
app.component('button-vue', Button);

app.mount('#app');