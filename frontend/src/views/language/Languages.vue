<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_LANGUAGES } from '@/queries/languages';
import TitleHeader from '@/components/TitleHeader.vue';
import InputVue from '@/components/Input.vue';
import QueryList from '@/components/QueryList.vue';

const searchText = ref('');

const { result, loading } = useQuery(GET_LANGUAGES);

const resultsList = computed(() => {
    if(result.value && result.value.languages) {
        return result.value.languages.filter(language => {
            return language.name.toLowerCase().includes(searchText.value.toLowerCase()) || language.code.toLowerCase().includes(searchText.value.toLowerCase());
        });
    }
    
    return [];
});
</script>

<template>
    <div id="languages-list">
        <div class="loading" v-if="loading"></div>
        <template v-else-if="resultsList">
            <div class="title-section">
                <title-header 
                  :title="'Languages'" 
                  :hasButton="true" />
                <div class="search">
                    <input-vue 
                      :placeholder="'Search...'" 
                      :name="'search'" 
                      v-model="searchText" />
                </div>
            </div>
            <query-list :list="resultsList" />
        </template>
    </div>
</template>