<template>
    <div id="languages-list">
        <template v-if="$apollo.loading">
            <div>Loading...</div>
        </template>
        <template v-else>
            <title-header :title="'Languages'"></title-header>
            
            <ul v-if="languages">
                <li v-for="lang in languages">{{lang.name}}</li>
            </ul>
        </template>
    </div>
</template>

<script>
import TitleHeader from '@/components/header/TitleHeader.vue';
import { GET_LANGUAGES } from '@/queries/languages';

export default {
    name: 'Languages',
    apollo: {
        languages: {
            prefetch: true,
            query: GET_LANGUAGES,
        }
    },
    components: {
        TitleHeader,
    },
}
</script>

<style lang="scss" scoped>

</style>