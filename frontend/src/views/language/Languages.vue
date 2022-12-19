<script setup>
import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_LANGUAGES } from '@/queries/languages';
import TitleHeader from '@/components/TitleHeader.vue';
import QueryList from '@/components/QueryList.vue';

const { result, loading } = useQuery(GET_LANGUAGES);
</script>

<template>
    <div id="languages-list">
        <div class="loading" v-if="loading"></div>
        <template v-else-if="result && result.languages">
            <title-header 
              :title="'Languages'" 
              :hasButton="true" 
              :withSearch="true"
              :searchList="result.languages" />
            <query-list :list="result.languages" />
        </template>
    </div>
</template>