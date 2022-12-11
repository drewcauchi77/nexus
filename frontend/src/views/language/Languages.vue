<template>
    <div id="languages-list">
        <template v-if="$apollo.loading">
            <loading></loading>
        </template>
        <template v-else>
            <title-header :title="'Languages'" :hasButton="true"></title-header>
            <query-list :list="languages"></query-list>
        </template>
    </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader.vue';
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