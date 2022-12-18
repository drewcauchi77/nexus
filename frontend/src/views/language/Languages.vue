<script setup>
import { useQuery } from '@vue/apollo-composable';
import { GET_LANGUAGES } from '@/queries/languages';
import TitleHeader from '@/components/TitleHeader.vue';
import QueryList from '@/components/QueryList.vue';

const { result, loading } = useQuery(GET_LANGUAGES);
</script>

<template>
    <div id="languages-list">
        <template v-if="loading && loading.value">
            <loading></loading>
        </template>
        <template v-else-if="result && result.languages">
            <title-header :title="'Languages'" :hasButton="true"></title-header>
            <query-list :list="result.languages"></query-list>
        </template>
    </div>
</template>