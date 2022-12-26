<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@vue/apollo-composable';
import { GET_LANGUAGE } from '@/queries/languages';
import TitleHeader from '@/components/TitleHeader.vue';
import InputVue from '@/components/Input.vue';

const route = useRoute();

const { result, loading } = useQuery(GET_LANGUAGE, () => ({
    id: +route.params.id,
}));

function updateLanguage() {
    console.log('UPDATE')
}
</script>

<template>
    <div id="edit-language">
        <div class="loading" v-if="loading"></div>
        <template v-else-if="result && result.language">
            <div class="title-section">
                <title-header 
                  :title="'Edit Language'" />
            </div>
            <input-vue 
              :label="'Enter Language Name in Native Language'" 
              :placeholder="'Malti'" 
              :name="'language'"
              :required="true"
              v-model="languageName" />
            <input-vue 
              :label="'Enter Language Code'" 
              :placeholder="'mt'" 
              :name="'language_code'"
              :required="true"
              v-model="languageCode" />
            <button-vue 
              :color="'#18bdb1'" 
              :text="'Update'" 
              :icon="'fa-check'"
              @buttonPressed="updateLanguage()" />
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>