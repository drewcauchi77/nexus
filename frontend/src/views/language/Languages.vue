<template>
    <div id="languages-list">
        <template v-if="$apollo.loading">
            <div>Loading...</div>
        </template>
        <template v-else>
            <title-header :title="'Languages'"></title-header>
            <query-list :list="languages"></query-list>
        </template>
    </div>
</template>

<script>
import TitleHeader from '@/components/header/TitleHeader.vue';
import QueryList from '@/components/QueryList.vue';
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
        QueryList,
    },
}
</script>

<style lang="scss" scoped>

</style>